# Ian Christie - Portfolio Website

A modern portfolio website built with React and Vite, showcasing AI models, engineering experience, and personal projects.

## Features

- **React Components**: Modular, reusable component architecture
- **Animated Rappeller Character**: Scroll-tracking animation with page load effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Rock Wall Sidebar**: Unique visual element with seamless texture tiling
- **Project Showcases**: Three sections for AI models, engineering experience, and personal projects

## Getting Started

### Prerequisites

- Node.js 20.8.0 or higher
- npm 10.6.0 or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Server will be available at http://localhost:5173/
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio_v2/
├── public/              # Static assets
│   ├── pic.jpg         # Profile image
│   ├── rappeller.png   # Animated character
│   └── seamless_wall.jpg # Rock wall texture
├── src/
│   ├── components/     # React components
│   │   ├── layout/    # Header, Footer, Layout
│   │   ├── sections/  # Page sections
│   │   ├── common/    # Reusable components
│   │   └── animations/# Rappeller animation
│   ├── hooks/         # Custom React hooks
│   ├── data/          # Content data
│   ├── styles/        # CSS styles
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies
```

## Component Overview

### Layout Components
- **Header**: Navigation bar with logo and icon buttons
- **Footer**: Copyright and footer navigation
- **Layout**: Main page layout with rock wall sidebar

### Section Components
- **HeroSection**: Profile image, name, and bio
- **AIModelsSection**: Showcase of AI model projects
- **ExperienceSection**: Engineering work experience
- **ProjectsSection**: Personal projects

### Common Components
- **ProjectCard**: Reusable card component for all grid sections

### Animation Components
- **Rappeller**: Animated character with scroll tracking

### Custom Hooks
- **useScrollPosition**: Tracks window scroll position for animations

## Customization

### Update Content

Edit `/src/data/content.js` to customize:
- Hero section content (name, subtitle, bio)
- AI model projects
- Engineering experience
- Personal projects

### Update Styling

Modify `/src/styles/styles.css` to change:
- Colors and typography
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

## Technologies

- **React 19.2**: UI framework
- **Vite 5.4**: Build tool and dev server
- **Vanilla CSS**: Styling (no preprocessors)

## Animations

- **Page Load**: Rappeller descends on initial page load (3s animation)
- **Scroll Tracking**: Rappeller follows scroll position with offset
- **Hover Effects**: Cards lift and zoom on hover
- **Smooth Transitions**: 0.2-0.3s transitions throughout

## Browser Support

Optimized for modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

© 2024 Ian Christie. All rights reserved.
