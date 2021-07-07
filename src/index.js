document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let input= document.getElementById("new-task-description");
let list=document.getElementById("tasks");

function todolist(event){
  event.preventDefault();
  let inputvalue= input.value;
  let todolist=document.createElement('li');
  todolist.innerText=inputvalue;
  list.appendChild(todolist);
  
}
let sub=document.getElementById("btn");
sub.onclick=todolist;