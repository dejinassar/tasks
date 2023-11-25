function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateTimeInput = document.getElementById('date-time-input');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const dateTimeText = document.createElement('span');
    dateTimeText.textContent = formatDateTime(dateTimeInput.value);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(dateTimeText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = '';
    dateTimeInput.value = '';
}

function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return dateTime.toLocaleDateString('en-US', options);
}
