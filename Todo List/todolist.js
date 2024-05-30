// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    var span = document.createElement("span");
    span.textContent = taskInput.value;
    li.appendChild(span);

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        var newText = prompt("Enter new task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    };
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
