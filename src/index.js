document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);

  let input = document.querySelector("#new-task-description");

});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");

  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
