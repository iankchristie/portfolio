#!/bin/bash

# Script to recursively find and compress images to be under 1MB
# Supports common image formats: jpg, jpeg, png, gif, webp

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default values
TARGET_DIR="${1:-.}"
SIZE_THRESHOLD=$((1024 * 1024))  # 1MB in bytes
QUALITY=75  # Starting quality for JPEG compression (1-100)

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed.${NC}"
    echo "Install it with: sudo apt-get install imagemagick"
    exit 1
fi

echo "========================================="
echo "Image Compression Script"
echo "========================================="
echo "Target directory: $TARGET_DIR"
echo "Target size: < 1MB"
echo "Starting JPEG quality: $QUALITY"
echo "Minimum quality: 50 (will resize if needed)"
echo "========================================="
echo ""

# Counter variables
total_files=0
compressed_files=0
total_saved=0

# Function to get file size in bytes
get_file_size() {
    stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null
}

# Function to format bytes to human-readable format
format_bytes() {
    local bytes=$1
    if [ $bytes -ge 1048576 ]; then
        echo "$(awk "BEGIN {printf \"%.2f\", $bytes/1048576}")MB"
    elif [ $bytes -ge 1024 ]; then
        echo "$(awk "BEGIN {printf \"%.2f\", $bytes/1024}")KB"
    else
        echo "${bytes}B"
    fi
}

# Function to compress image
compress_image() {
    local file="$1"
    local original_size=$(get_file_size "$file")

    # Skip if file is already under threshold
    if [ $original_size -le $SIZE_THRESHOLD ]; then
        return
    fi

    total_files=$((total_files + 1))

    # Create backup
    local backup="${file}.backup"
    cp "$file" "$backup"

    # Get file extension
    local ext="${file##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    echo -e "${YELLOW}Processing:${NC} $file"
    echo "  Original size: $(format_bytes $original_size)"

    # Try iteratively reducing quality until under threshold
    local current_quality=$QUALITY
    local min_quality=50
    local new_size=$original_size

    while [ $new_size -gt $SIZE_THRESHOLD ] && [ $current_quality -ge $min_quality ]; do
        # Compress based on file type
        case "$ext" in
            jpg|jpeg)
                convert "$backup" -quality $current_quality -strip "$file.tmp" && mv "$file.tmp" "$file"
                ;;
            png)
                convert "$backup" -quality $current_quality -strip "$file.tmp" && mv "$file.tmp" "$file"
                ;;
            gif)
                convert "$backup" -fuzz 10% -layers Optimize "$file.tmp" && mv "$file.tmp" "$file"
                ;;
            webp)
                convert "$backup" -quality $current_quality "$file.tmp" && mv "$file.tmp" "$file"
                ;;
            *)
                echo -e "${RED}  Unsupported format: $ext${NC}"
                rm "$backup"
                return
                ;;
        esac

        if [ $? -eq 0 ]; then
            new_size=$(get_file_size "$file")

            if [ $new_size -le $SIZE_THRESHOLD ]; then
                break
            fi

            # Reduce quality for next iteration
            current_quality=$((current_quality - 5))

            if [ $current_quality -lt $min_quality ]; then
                echo -e "  ${YELLOW}Reached minimum quality, trying resize...${NC}"
                # Try resizing to 90% if quality reduction isn't enough
                convert "$backup" -resize 90% -quality $min_quality -strip "$file.tmp" && mv "$file.tmp" "$file"
                new_size=$(get_file_size "$file")
            fi
        else
            echo -e "${RED}  Compression failed, restoring original${NC}"
            mv "$backup" "$file"
            return
        fi
    done

    # Check final result
    local final_size=$(get_file_size "$file")
    local saved=$((original_size - final_size))

    if [ $final_size -lt $original_size ]; then
        compressed_files=$((compressed_files + 1))
        total_saved=$((total_saved + saved))
        local percent_saved=$(awk "BEGIN {printf \"%.1f\", ($saved*100.0/$original_size)}")

        if [ $final_size -le $SIZE_THRESHOLD ]; then
            echo -e "  ${GREEN}New size: $(format_bytes $final_size) (saved: $(format_bytes $saved), ${percent_saved}%) - Under 1MB!${NC}"
        else
            echo -e "  ${YELLOW}New size: $(format_bytes $final_size) (saved: $(format_bytes $saved), ${percent_saved}%) - Still over 1MB${NC}"
        fi
        rm "$backup"
    else
        echo -e "  ${YELLOW}No size reduction, keeping original${NC}"
        mv "$backup" "$file"
    fi

    echo ""
}

# Find and process images
while IFS= read -r -d '' file; do
    compress_image "$file"
done < <(find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) -print0)

# Print summary
echo "========================================="
echo "Summary"
echo "========================================="
echo "Files processed: $total_files"
echo "Files compressed: $compressed_files"
echo "Total space saved: $(format_bytes $total_saved)"
echo "========================================="