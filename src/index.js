document.addEventListener("DOMContentLoaded", () => {

  function createNewTask() {
    event.preventDefault();
    const new_task_description = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = new_task_description.value;
  
    appendNewTask(newTask);
    event.target.reset();
  }
  
  function appendNewTask(task) {
    document.getElementById("tasks").appendChild(task);
  }

  const new_task_form = document.getElementById("create-task-form");
  const new_task_description = document.getElementById("new-task-description");

  new_task_form.addEventListener("submit", createNewTask);
  
});
  
