# 3D Parallax Portfolio

An immersive 3D parallax portfolio featuring depth-based scroll navigation, animated neural network canvas background, and glassmorphism UI with 3D card tilt effects.

## Features

- **3D Perspective Scrolling** - Sections positioned along the Z-axis create a "flying through space" effect as you scroll
- **Neural Network Canvas** - Animated particle system with glowing nodes and dynamic connections
- **Glassmorphism Cards** - Project cards with backdrop blur, subtle borders, and 3D tilt on hover
- **HUD-Style Navigation** - Sci-fi inspired status indicators and dot-based section navigation
- **Responsive Design** - Adapts between desktop rail nav and mobile bottom bar
- **Smooth Animations** - Request animation frame-based scroll interpolation for buttery 60fps

## Technologies

- HTML5
- CSS3 (Custom Properties, Backdrop Filter, 3D Transforms)
- JavaScript (Canvas API, RequestAnimationFrame)
- Tailwind CSS (via CDN for utility classes)
- Google Fonts (Space Grotesk, Inter)

## Techniques

| Technique | Implementation |
|-----------|----------------|
| 3D Parallax | `transform-style: preserve-3d` with `translateZ()` sections |
| Section Fading | Distance-based opacity calculation with quadratic easing |
| Neural Network | Canvas 2D with z-depth projection and neighbor connections |
| Card Tilt | Mouse position to rotation mapping with `perspective()` |
| Scroll Smoothing | Linear interpolation between target and current scroll |

## Preview

Open `index.html` in a browser and scroll to experience the 3D depth effect.
