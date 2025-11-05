// Rappeller scroll animation
const rappeller = document.getElementById('rappeller');
const startOffset = 150; // Start 150px lower

function updateRappellerPosition() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Update the rappeller's top position to match scroll with offset
    // The rappeller will descend as the user scrolls down
    rappeller.style.top = (scrollPosition + startOffset) + 'px';
}

// Update position on scroll
window.addEventListener('scroll', updateRappellerPosition);

// Set initial position
updateRappellerPosition();
