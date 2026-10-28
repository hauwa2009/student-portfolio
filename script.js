let tasks = [];

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task !== "") {
        tasks.push(task);
        showTasks();
        taskInput.value = "";
    }
});

function showTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            tasks.splice(i, 1);
            showTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
}