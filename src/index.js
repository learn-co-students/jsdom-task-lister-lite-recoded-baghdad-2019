document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  
  taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newTaskInput=document.getElementById("new-task-description").value;
  let li = document.createElement("li");
  document.getElementById("tasks").appendChild(li).innerHTML=newTaskInput ;
  });
 
})