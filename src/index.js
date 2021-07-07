 document.addEventListener("DOMContentLoaded", () => {

function addListItem(event) {
  event.preventDefault();
  let li = document.createElement("li"); 
  let btn = document.createElement("BUTTON"); 
  inputValue=document.querySelector("#create-task-form #new-task-description");
  li.innerText =inputValue.value;
  btn.innerHTML = "X";
  btn.onclick=function() {
    this.parentNode.remove();
  };
  li.appendChild(btn);
  ul.appendChild(li);
  inputValue.value="";
}

let form = document.querySelector("form");
let ul = document.getElementById("tasks");
form.onsubmit = addListItem;
});



