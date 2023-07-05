const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();


  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    newTask.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
      newTask.remove();
    });
  }
}  
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});