# Copilot Instructions for WebDevLab1

## Project Overview
This project is a static website structured with HTML, CSS, and JavaScript. It is organized into the following main directories:
- `html/`: Contains all HTML files (e.g., `index.html`, `aboutus.html`, `lab.html`, `web lab.html`).
- `css/`: Intended for CSS files (currently empty).
- `js/`: Intended for JavaScript files (currently empty).
- `assests/`: Contains image assets used in the website.

## Key Patterns & Conventions
- All web pages are located in the `html/` directory. Use relative paths to reference assets and styles.
- Images are stored in `assests/` and referenced from HTML using relative paths (e.g., `../assests/1.jpg`).
- CSS and JS directories are present for future expansion, but currently do not contain any files.
- File and folder names may contain spaces (e.g., `web lab.html`). Always use quotes or escape spaces when referencing these in code or scripts.

## Developer Workflow
- No build or test scripts are present; development is manual. Open HTML files directly in a browser for preview.
- To add styles, create CSS files in `css/` and link them in HTML files using `<link rel="stylesheet" href="../css/yourfile.css">`.
- To add interactivity, create JS files in `js/` and link them in HTML files using `<script src="../js/yourfile.js"></script>`.
- Place new images in `assests/` and reference them with relative paths from HTML.

## Project-Specific Notes
- There are no external dependencies or frameworks in use.
- No special build, test, or deployment steps are required.
- No project-level README or documentation files exist yet.

## Example: Referencing an Image
```html
<img src="../assests/1.jpg" alt="Example Image">
```

## Example: Linking a CSS File
```html
<link rel="stylesheet" href="../css/styles.css">
```

## Example: Linking a JS File
```html
<script src="../js/scripts.js"></script>
```

## Recommendations for AI Agents
- Maintain the current directory structure and use relative paths.
- When adding new HTML pages, place them in `html/` and update navigation links as needed.
- When adding assets, ensure they are placed in the correct directory and referenced properly.
- If introducing build tools or frameworks, document the workflow in a new `README.md`.
