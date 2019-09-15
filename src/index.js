

document.querySelector("#create-task-form").addEventListener("submit", function(event) {
         let inputValue=document.getElementById('new-task-description').value;
  var ul = document.getElementById("tasks");
  var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
  ul.appendChild(li);
         event.preventDefault();
}, false);


