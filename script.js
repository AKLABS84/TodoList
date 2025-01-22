// Select form, input, and list elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const deleteButton = document.getElementById('delete-button');
const editButton = document.getElementById('edit-button');

// Handle form submission
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  // Create a new task
  const taskItem = document.createElement('li');
  taskItem.className = 'todo-item';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button>Delete</button>
  `;

  // Add event listener to mark task as completed
  taskItem.querySelector('span').addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  // Add event listener to delete task
  taskItem.querySelector('button').addEventListener('click', function () {
    todoList.removeChild(taskItem);
  });

  // Add task to the list
  todoList.appendChild(taskItem);

  // Clear the input
  todoInput.value = '';
});

// Handle delete button click
deleteButton.addEventListener('click', function () {
  todoList.innerHTML = ''; // Clear all tasks
});

// Handle edit button click
editButton.addEventListener('click', function () {
  todoForm.style.visibility =
    todoForm.style.visibility === 'visible' ? 'hidden' : 'visible';
});
