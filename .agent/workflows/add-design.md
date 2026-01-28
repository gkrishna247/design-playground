---
description: Add a new design experiment to the playground with auto-scaffolding and index update
---

# Add Design Workflow

This workflow creates a new design experiment folder with templates and automatically updates the project index.

## Usage

```
/add-design                          # Empty design with AI-generated name
/add-design Neon Glow Buttons        # Named design
/add-design [attach: reference.png]  # Analyze file and scaffold
```

## Workflow Steps

### Step 1: Parse Input & Determine Design Name
- If **context provided**: Convert to kebab-case (e.g., "Neon Glow Buttons" → `neon-glow-buttons`)
- If **file uploaded**: Analyze content to extract design intent and suggest name
- If **no input**: Generate descriptive name based on typical design patterns

### Step 2: Ensure Unique Folder Name
Check existing folders in project root. If collision detected:
- Append `-2`, `-3`, etc. until unique

### Step 3: Show Confirmation
Display proposed plan and wait for user approval:
```
📋 Proposed Design:
├─ Folder: <folder-name>/
├─ Tech Stack: <detected-technologies>
├─ Description: "<ai-generated-description>"
├─ Accent Hue: <unique-hue>
└─ Branch: feat/add-<folder-name>

Proceed? [Confirm/Edit]
```

### Step 4: Create Git Branch
```powershell
git checkout -b feat/add-<folder-name>
```

### Step 5: Create Design Folder
Create `<folder-name>/` at project root.

### Step 6: Generate Template Files

#### index.html
- **If no context/file**: Use minimal skeleton template
  - `<!DOCTYPE html>`, `<head>`, `<body>`, back navigation only
- **If file analyzed**: Use styled template
  - Include project CSS variables, orb backgrounds, full aesthetic
  - Pre-populate with detected design elements

#### README.md
AI-generated content with:
- Title matching design name
- Description based on analysis or context
- Features list (inferred from design type)
- Technologies used
- Techniques/implementation notes

### Step 7: Update designs.js Index
Add entry to `assets/js/modules/designs.js`:

```javascript
{
    id: '<folder-name>',
    name: '<Display Name>',
    description: '<AI-generated description>',
    techStack: ['HTML', 'CSS', ...], // AI-determined
    folderPath: './<folder-name>/',
    accentHue: <random-unique-hue>   // 0-360, no duplicates
}
```

### Step 8: Finish
1. Print success summary with created files
2. Open design's `index.html` in browser for preview

## Templates Location

Templates are stored in `.agent/templates/design/`:
- `index-minimal.html` - Skeleton for quick experiments
- `index-styled.html` - Full project aesthetic
- `README.md` - Base structure for AI to populate

## Accent Hue Generation

Generate random hue (0-360) that doesn't match existing designs:
1. Read all `accentHue` values from `designs.js`
2. Generate random hue
3. Ensure minimum 30° difference from existing hues
4. If collision, regenerate

## Tech Stack Detection

AI determines tech stack from:
- **Context keywords**: "animation" → CSS Animations, "scroll" → JavaScript
- **File analysis**: Detect CSS properties, JS patterns
- **Default**: `['HTML', 'CSS']` baseline
