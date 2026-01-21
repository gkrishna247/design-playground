# 🎨 Design Playground

A central playground for multiple independent design experiments, each stored in its own folder and accessible through a single root index page, published via GitHub Pages.

## 🌐 Live Demo

Visit the live playground at: `https://gkrishna247.github.io/design-playground/`

## 📁 Project Structure

```
design-playground/
├── index.html              # Main navigation hub
├── styles.css              # Shared global styles
├── gradient-cards/         # Example design folder
│   └── index.html
├── animated-buttons/       # Example design folder
│   └── index.html
├── glassmorphism/          # Example design folder
│   └── index.html
└── README.md
```

## 🚀 Getting Started

### Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/gkrishna247/design-playground.git
   cd design-playground
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment

This project is already configured for GitHub Pages. Simply push to the `main` branch and enable GitHub Pages in your repository settings (Settings → Pages → Source: Deploy from a branch → Select `main` branch).

## ➕ Adding a New Design

Follow these steps to add your own design experiment:

### 1. Create a New Folder

Create a new top-level folder with a descriptive name (use lowercase with hyphens):

```bash
mkdir my-awesome-design
```

### 2. Create index.html

Inside your new folder, create an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Design - Design Playground</title>
    <style>
        /* Your CSS styles here */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px 20px;
        }
        
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #667eea;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <a href="../" class="back-link">← Back to Playground</a>
    <h1>My Awesome Design</h1>
    <!-- Your design content here -->
</body>
</html>
```

### 3. Update Main Navigation

Edit the root `index.html` file and add a new card to the design grid:

```html
<div class="design-card">
    <h2>My Awesome Design</h2>
    <p>Description of your design experiment</p>
    <a href="my-awesome-design/" class="btn">View Design</a>
</div>
```

### 4. Test Locally

Open the root `index.html` in your browser and verify:
- Your new design appears in the navigation
- Clicking the link takes you to your design
- The back link returns to the main page
- Your design looks good on mobile and desktop

### 5. Commit and Push

```bash
git add .
git commit -m "Add my-awesome-design"
git push origin main
```

Your design will be live on GitHub Pages within a few minutes!

## 💡 Design Tips

### Best Practices

- **Keep it simple**: Use vanilla HTML/CSS, no frameworks required
- **Make it responsive**: Test on different screen sizes
- **Add a back link**: Always include a way to return to the main page
- **Use semantic HTML**: Proper structure helps accessibility
- **Comment your code**: Help others understand your approach

### Naming Conventions

- Folder names: lowercase with hyphens (e.g., `button-animations`)
- Be descriptive but concise
- Avoid special characters except hyphens

### Styling Guidelines

- You can use inline styles in your `index.html` or create separate CSS files
- Consider the overall aesthetic when designing
- Ensure good contrast for readability
- Test hover states and interactions

## 🎯 Design Ideas

Need inspiration? Try creating:

- **Animation experiments**: CSS keyframes, transitions, transforms
- **Layout patterns**: Grid layouts, flexbox designs, card patterns
- **Color schemes**: Gradients, palettes, color transitions
- **Interactive elements**: Hover effects, click animations, micro-interactions
- **Typography**: Font pairings, text effects, readable layouts
- **Form designs**: Custom inputs, buttons, validation states
- **Navigation patterns**: Menus, breadcrumbs, pagination
- **Loading states**: Spinners, skeletons, progress bars

## 📝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new design in a separate folder
3. Submit a pull request with your design

Please ensure your design:
- Works without external dependencies (keep it static)
- Is responsive and accessible
- Includes a descriptive title and back link
- Is your own original work or properly attributed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All designs are self-contained experiments
- No external frameworks or libraries required
- Built for learning and creative exploration
