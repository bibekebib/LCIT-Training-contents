// Get the elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";

    // Add a remove button to the task
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    newTask.appendChild(removeButton);

    // Add event listener to remove the task when remove button is clicked
    removeButton.addEventListener("click", function() {
      newTask.remove();
    });
  }
}

// Add event listener to the add button
addButton.addEventListener("click", addTask);

// Add event listener to the input field to allow adding tasks by pressing Enter key
taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
