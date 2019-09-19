document.addEventListener("DOMContentLoaded", () => {
    // your code here
    console.log('tasks');
});
let input = document.getElementById('new-task-description');
let list = document.getElementById('tasks');

function todo(event) {
    event.preventDefault();
    let inputVal = input.value;
    let task = document.createElement('li');
    task.innerText = inputVal;
    list.appendChild(task);
}
document.onsubmit = todo;