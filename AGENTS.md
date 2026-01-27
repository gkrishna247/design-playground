# AGENTS.md

> A guide for AI coding agents working on the Design Playground project.

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3
- **Architecture**: Modular static site with independent design experiments
- **Deployment**: GitHub Pages

## Project Structure

```
design-playground/
├── index.html              # Main navigation hub
├── styles.css              # Shared global styles
├── gradient-cards/         # Design experiment folder
│   └── index.html
├── animated-buttons/       # Design experiment folder
│   └── index.html
├── glassmorphism/          # Design experiment folder
│   └── index.html
└── [new-design]/           # Add new experiments as folders
    └── index.html
```

## Agent Roles

### @design-architect (Primary)
**Responsibilities**: Overall design component development, folder structure, navigation integration.
**Skills**: HTML structure, CSS layout, responsive design.

### @css-specialist
**Responsibilities**: CSS animations, transitions, modern effects (glassmorphism, gradients).
**Skills**: Keyframes, transforms, GPU-accelerated animations.

### @docs-maintainer
**Responsibilities**: README updates, inline documentation, usage examples.
**Skills**: Markdown, technical writing.

## Code Style

### HTML
- Use semantic elements (`<main>`, `<nav>`, `<section>`, `<article>`)
- Include viewport meta tag and proper `lang` attribute
- Always add back-link navigation: `<a href="../">← Back to Playground</a>`

### CSS
- **Naming**: BEM convention (`block__element--modifier`)
- **Organization**: Reset → Base → Components → Utilities
- **Units**: `rem` for typography, `px` for borders, `%` or `vw/vh` for layout
- **Colors**: Use CSS custom properties for consistency

### Folder Naming
- Lowercase with hyphens (e.g., `button-animations`)
- Descriptive but concise
- No special characters except hyphens

## Commands

### Local Development
```bash
# Python (recommended)
python -m http.server 8000

# Node.js alternative
npx http-server -p 8000
```

### Verification
```bash
# Check responsive design
# Open browser DevTools → Toggle device toolbar

# Validate HTML
npx html-validate index.html

# Check accessibility
# Use browser Lighthouse audit
```

## Testing Checklist

Before committing new designs:
- [ ] Responsive on mobile (320px) and desktop (1200px+)
- [ ] Back-link navigation works
- [ ] No console errors
- [ ] Semantic HTML structure
- [ ] Color contrast meets WCAG AA (4.5:1)

## Security

- No inline JavaScript in HTML files
- No external CDN dependencies (keep static)
- Sanitize any user-generated content if added

## What NOT to Do

- Don't use JavaScript frameworks (keep vanilla)
- Don't add build tools or package.json to component folders
- Don't modify shared `styles.css` without updating all components
- Don't use external fonts without fallbacks
