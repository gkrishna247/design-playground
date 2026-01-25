# 🎨 Design Playground

A curated collection of web design experiments, micro-interactions, and visual layouts. This repository serves as a personal laboratory for exploring modern web aesthetics, animations, and CSS techniques.

## 📁 Current Project State

This repository has been reset to a clean slate, ready for fresh design experiments.

```
design-playground/
├── LICENSE             # Project license
└── README.md           # Documentation and guides
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gkrishna247/design-playground.git
cd design-playground
```

### 2. Prepare the Root
Since the playground is currently empty, your first step should be creating a root `index.html` to act as your navigation hub. You can use the template below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Playground</title>
    <style>
        body { font-family: system-ui; text-align: center; padding: 50px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    </style>
</head>
<body>
    <h1>My Design Playground</h1>
    <div class="grid" id="design-grid">
        <!-- New designs will be added here -->
    </div>
</body>
</html>
```

### 3. Local Preview
Use a local server to view your progress:
```bash
# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## ➕ Adding a New Design

Follow these steps to add a new experiment:

### 1. Create a Folder
Create a new folder for your design (use lowercase-hyphens):
```bash
mkdir my-new-design
```

### 2. Create index.html
Inside the folder, create your design's entry point. Ensure you include a "Back to Playground" link:
```html
<a href="../">← Back to Playground</a>
```

### 3. Register the Design
Update your root `index.html` to include a link to your new folder.

## 💡 Design Principles

- **Framework-Free**: Aim for Vanilla HTML/CSS/JS where possible.
- **Micro-Interactions**: Focus on the small details—hover states, transitions, and polish.
- **Responsiveness**: Ensure designs look stunning on all devices.
- **Self-Contained**: Keep each experiment within its own directory.

## 🎯 Inspiration & Ideas

- **Glassmorphism** layouts
- **Neumorphic** UI elements
- **Parallax** scrolling effects
- **Advanced CSS** Grid/Flexbox patterns
- **SVG Animations** and filters

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
