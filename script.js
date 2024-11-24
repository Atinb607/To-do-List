document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks');

    // Handle task addition
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            addTask(taskValue);
            taskInput.value = ''; // Clear input field
        }
    });

    // Add task function
    function addTask(taskText) {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="task-text">
                <input type="checkbox" class="task-check">
                <span>${taskText}</span>
            </div>
            <button class="delete-btn">✖</button>
        `;

        // Handle task completion (strikethrough)
        li.querySelector('.task-check').addEventListener('change', (e) => {
            const taskSpan = li.querySelector('span');
            if (e.target.checked) {
                taskSpan.classList.add('completed');
            } else {
                taskSpan.classList.remove('completed');
            }
        });

        // Handle task deletion
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        tasksContainer.appendChild(li);
    }
});
