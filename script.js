//Accessing HTML elements
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#taskList");

//Stores tasks
const tasks = [];

//Waits until buttons clicked
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        return;
    }

    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
});

//Displays inputted tasks
function displayTasks() {
    //Clears old display to keep display updated 
    taskList.innerHTML = "";

    //Loops through each task in array 
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        //creates the html elements in the task list
        const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.classList.add(task.priority);

        const taskName = document.createElement("div");
            taskName.textContent = task.name + " Priority: " + task.priority;

        taskDiv.appendChild(taskName);

        if (task.completed === true) {
            taskDiv.classList.add("completed");
        }
        //Creates complete button in html when task is made
        const completeButton = document.createElement("button");
        completeButton.classList.add("button")
        completeButton.textContent = "Complete";

        //When complete is clicked sets status to complete and updates display
        completeButton.addEventListener("click", function() {
            tasks[i].completed = true;
            displayTasks();
        });

        taskDiv.appendChild(completeButton);
        //Creates delete button in html when task is made
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("button")
        deleteButton.textContent = "Delete";

        //When delete is clicked deletes task and updates display
        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });
    
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    }
}

