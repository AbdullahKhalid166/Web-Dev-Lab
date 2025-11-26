// Lab 9 - To-Do List Application
// Features: Add, Edit, Delete, Toggle Complete, Filter, localStorage persistence, keyboard support

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.editingId = null;

        // DOM elements
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-buttons .btn');
        this.clearBtn = document.getElementById('clearBtn');
        this.totalCount = document.getElementById('totalCount');
        this.completedCount = document.getElementById('completedCount');
        this.remainingCount = document.getElementById('remainingCount');

        this.init();
    }

    init() {
        // Load from localStorage
        this.load();

        // Event listeners
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addTodo();
            }
        });

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        this.clearBtn.addEventListener('click', () => this.clearCompleted());

        // Initial render
        this.render();
    }

    // Load todos from localStorage
    load() {
        const saved = localStorage.getItem('todos');
        this.todos = saved ? JSON.parse(saved) : [];
    }

    // Save todos to localStorage
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Add a new todo
    addTodo() {
        const text = this.todoInput.value.trim();
        if (!text) {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.push(todo);
        this.save();
        this.todoInput.value = '';
        this.todoInput.focus();
        this.render();
    }

    // Toggle todo completion status
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
        }
    }

    // Edit todo
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        // Create edit input
        const li = document.querySelector(`[data-id="${id}"]`);
        const textSpan = li.querySelector('.todo-text');
        const originalText = textSpan.textContent;

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'todo-edit-input';
        editInput.value = originalText;

        textSpan.replaceWith(editInput);
        editInput.focus();
        editInput.select();

        const saveFn = () => {
            const newText = editInput.value.trim();
            if (newText) {
                todo.text = newText;
                this.save();
            }
            this.render();
        };

        editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveFn();
            if (e.key === 'Escape') this.render();
        });

        editInput.addEventListener('blur', saveFn);
    }

    // Delete todo
    deleteTodo(id) {
        if (confirm('Delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.save();
            this.render();
        }
    }

    // Clear all completed todos
    clearCompleted() {
        if (confirm('Delete all completed tasks?')) {
            this.todos = this.todos.filter(t => !t.completed);
            this.save();
            this.render();
        }
    }

    // Filter todos based on current filter
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default: // 'all'
                return this.todos;
        }
    }

    // Update stats
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const remaining = total - completed;

        this.totalCount.textContent = total;
        this.completedCount.textContent = completed;
        this.remainingCount.textContent = remaining;
    }

    // Render the todo list
    render() {
        const filtered = this.getFilteredTodos();

        // Clear the list
        this.todoList.innerHTML = '';

        // Show/hide empty state
        if (this.todos.length === 0) {
            this.emptyState.style.display = 'block';
        } else {
            this.emptyState.style.display = 'none';
        }

        // Render filtered todos
        filtered.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.dataset.id = todo.id;

            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    aria-label="Toggle ${todo.text} completion"
                >
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <div class="todo-actions">
                    <button class="todo-btn todo-btn-edit" aria-label="Edit task">Edit</button>
                    <button class="todo-btn todo-btn-delete" aria-label="Delete task">Delete</button>
                </div>
            `;

            // Checkbox listener
            li.querySelector('.todo-checkbox').addEventListener('change', () => {
                this.toggleTodo(todo.id);
            });

            // Edit button
            li.querySelector('.todo-btn-edit').addEventListener('click', () => {
                this.editTodo(todo.id);
            });

            // Delete button
            li.querySelector('.todo-btn-delete').addEventListener('click', () => {
                this.deleteTodo(todo.id);
            });

            this.todoList.appendChild(li);
        });

        // Update stats
        this.updateStats();
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
