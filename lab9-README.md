# Lab 9: DOM Manipulation — To-Do List

## Overview
A fully functional to-do list web application demonstrating DOM manipulation, event handling, and localStorage persistence. Users can create, edit, delete, and organize tasks with a modern, responsive UI.

## Features

### Core Functionality
- **Add Tasks**: Input field with "Add" button; press Enter to add quickly
- **Edit Tasks**: Click "Edit" to modify task text inline with keyboard support
- **Delete Tasks**: Remove individual tasks with confirmation
- **Toggle Complete**: Check off tasks to mark as complete (visual strikethrough)
- **Clear Completed**: Bulk delete all completed tasks
- **Filter View**: Switch between All, Active, and Completed tasks
- **Statistics**: Live count of total, completed, and remaining tasks

### Persistence & Storage
- **localStorage Integration**: All tasks automatically saved to browser storage
- **Instant Load**: Tasks restore on page refresh
- **No Server Required**: Works entirely client-side

### User Experience
- **Keyboard Support**: Press Enter in input to add task, Enter/Escape in edit mode
- **Animations**: Smooth slide-in animations for new tasks
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: ARIA labels, focus states, keyboard navigation
- **Visual Feedback**: Hover effects, active states, disabled styling

## Technical Details

### DOM APIs Used
- `getElementById()`, `querySelector()`, `querySelectorAll()` — element selection
- `addEventListener()` — event handling (click, keydown, change, blur)
- `createElement()` — dynamic element creation
- `appendChild()`, `replaceWith()` — DOM manipulation
- `dataset` attribute — storing todo IDs
- `innerHTML`, `textContent` — content management

### JavaScript Features
- **Class-Based Architecture**: `TodoApp` class encapsulates all logic
- **CRUD Operations**: Create, Read, Update, Delete todos
- **localStorage API**: `getItem()`, `setItem()` for persistence
- **Date Handling**: `Date.now()` for unique IDs, `toLocaleString()` for timestamps
- **HTML Escaping**: XSS protection with `textContent` → `innerHTML` conversion
- **Event Delegation**: Parent listener approach for scalability

### CSS Features
- **Flexbox Layout**: Responsive button and item layouts
- **CSS Variables**: Color palette management
- **Keyframe Animations**: Slide-in effect for new tasks
- **Media Queries**: Mobile-first responsive design
- **Focus States**: Visible outlines for keyboard accessibility
- **Gradient Background**: Modern visual design

## Files
- `html/lab9.html` — Main HTML structure
- `css/lab9.css` — Responsive styling and animations
- `js/lab9.js` — TodoApp class and all functionality
- `lab9-README.md` — This file

## Usage

### Local Testing
1. Open `html/lab9.html` in VS Code
2. Launch with Live Server (right-click → "Open with Live Server")
3. Add tasks using the input field or press Enter
4. Click checkboxes to mark complete
5. Use "Edit", "Delete", and filter buttons to manage tasks
6. Refresh the page — tasks persist!

### Adding a Task
```
1. Type task text in the input field
2. Click "Add" or press Enter
3. Task appears in the list instantly
```

### Editing a Task
```
1. Click the "Edit" button on a task
2. Modify the text in the inline input
3. Press Enter to save or Escape to cancel
4. Changes auto-save to localStorage
```

### Filtering Tasks
```
- Click "All" to see all tasks
- Click "Active" to show incomplete tasks
- Click "Completed" to show finished tasks
- Click "Clear Completed" to delete all done tasks
```

## localStorage Behavior

**Key**: `todos`  
**Format**: JSON array of todo objects

```javascript
[
  {
    "id": 1701000000000,
    "text": "Learn DOM manipulation",
    "completed": false,
    "createdAt": "11/26/2025, 10:00:00 AM"
  }
]
```

**Auto-Load**: On page load, the app reads from localStorage and populates the list  
**Auto-Save**: Every action (add, edit, delete, toggle) immediately saves the updated list  
**Clear Data**: Open browser DevTools Console and run `localStorage.removeItem('todos')`

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage support required (all modern browsers have it)
- ES6+ syntax (const, arrow functions, template literals)

## Accessibility Features
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Visible focus states on all buttons
- High contrast colors
- Semantic HTML structure

## Future Enhancements
- Task categories/tags
- Due dates and reminders
- Local database (IndexedDB) for larger datasets
- Cloud sync (Firebase/backend API)
- Dark mode toggle
- Export/import as JSON or CSV
- Drag-and-drop reordering
- Search functionality

## Learning Outcomes
After completing this lab, you will understand:
- ✅ DOM selection and manipulation
- ✅ Event handling and delegation
- ✅ localStorage API for client-side persistence
- ✅ Class-based JavaScript architecture
- ✅ Keyboard accessibility (Enter, Escape)
- ✅ XSS prevention through proper escaping
- ✅ Responsive CSS and animations
- ✅ CRUD operations in web apps

---

**Created**: November 2025  
**Status**: Complete ✓
