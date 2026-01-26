# Design Playground 🎨

A curated collection of creative design experiments, UI components, and visual explorations. This repository serves as a sandbox for experimenting with modern CSS techniques, animations, and UI patterns.

## Repository Structure

```
design-playground/
├── index.html          # Gateway page listing all design experiments
├── README.md           # This documentation file
├── agents.md           # Agent configuration and usage patterns
├── LICENSE
└── <design-folders>/   # Individual design experiment folders
```

## Adding New Designs

### Folder Format Structure

Each design experiment must follow this structure:

```
<design-name>/
├── index.html          # Main entry point (required)
├── README.md           # Design documentation (required)
├── style.css           # Styles (optional, can be inline)
├── script.js           # Scripts (optional, can be inline)
└── assets/             # Images, fonts, etc. (optional)
```

### Naming Convention

- Use **kebab-case** for folder names based on the design name
- Examples: `gradient-cards`, `glassmorphism-button`, `animated-navbar`
- Keep names descriptive but concise

### Required Files

| File | Description |
|------|-------------|
| `index.html` | The main HTML file that renders the design |
| `README.md` | Documentation describing the design, techniques used, and any notes |

### Registering a New Design

To add your design to the gateway page, update the `designs` array in `index.html`:

```javascript
const designs = [
    // ... existing designs ...
    {
        name: "Your Design Name",
        description: "Brief description of what the design demonstrates",
        techStack: ["HTML", "CSS", "JavaScript"],  // Technologies used
        folderPath: "./your-design-folder/"
    }
];
```

### Design Entry Template

```javascript
{
    name: "",           // Display name for the card
    description: "",    // 1-2 sentence description
    techStack: [],      // Array of technology names as strings
    folderPath: ""      // Relative path to the design folder (include trailing /)
}
```

## Design Guidelines

1. **Self-Contained**: Each design should work independently
2. **No External Dependencies**: Prefer inline styles/scripts or local files
3. **Responsive**: Designs should work across different screen sizes
4. **Documented**: Include a README explaining the techniques used
5. **Clean Code**: Well-commented, organized code for learning purposes

## Gateway Features

The main `index.html` gateway provides:

- 🌈 Animated gradient background
- 🪟 Glassmorphism-styled design cards
- ✨ Smooth hover animations and entrance effects
- 🔍 Filter designs by technology stack
- 📱 Fully responsive grid layout
- 🌙 Dark theme with vibrant accents

## License

This project is open source and available under the [MIT License](LICENSE).
