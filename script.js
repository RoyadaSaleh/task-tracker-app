// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array call
// TODO: Call the render function to update the table with the new tasks.

// script.js
// Section 2: App State Variables
let tasks = [];

// script.js
// Section 3: Cached Element References


let taskForm = document.getElementById("taskForm")
console.log(taskForm)

//Event Listener
taskForm.addEventListener('submit', handleSubmit)

let taskTable = document.getElementById("taskTable")
console.log(taskTable)

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values

    let taskName = document.getElementById("taskName")
    let taskDescription = document.getElementById("taskDescription")
    let taskDeadline = document.getElementById("taskDeadline")

    console.log(taskName, taskDescription, taskDeadline)

    // TODO: Validate input fields
    if (taskname, taskDescription = filled ) {
        alert = "Subbmitted";
      } else {
        alert = "Task name and deadline are required!";
      }





    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline })
    render();
}
// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the ar
}
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}