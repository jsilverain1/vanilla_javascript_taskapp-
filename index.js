const taskForm = document.querySelector(".textbox");
const taskInput = document.querySelector("#task");

const addButton = document.querySelector(".add");

const deleteButton = document.querySelector(".delete");
const card = document.querySelector(".card");


//Created a container 
const taskContainer = document.querySelector(".taskContainer");



//Event listener added to the "add" button when a user submits the input 
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
//Created a container to hold each task, checkbox and delete button 
  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");

  const newTask = document.createElement("p");

//Created a variable to hold the value of the input 
if (taskInput.value !== "") {
    //const newTask = document.createElement("p");
    localStorage.setItem('newTask',taskInput.value);
    newTask.textContent = localStorage.getItem('newTask');  

    const newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = "Delete";
    newDeleteButton.classList.add('delete');

    const complete = document.createElement("input");
    complete.type = 'checkbox';

    taskRow.append(complete,newTask, newDeleteButton);
    taskContainer.append(taskRow);

    newDeleteButton.addEventListener("click", () => {
        taskRow.remove();
        localStorage.removeItem('newTask');
      });
    
      complete.addEventListener("change", () => {
        newTask.style.textDecoration = complete.checked ? "line-through" : "none";
      })
    
} else {
   displayError("Please enter something");
}

function displayError (message){
    taskContainer.textContent = message;
    
}


//Created a delete button 
  //const newDeleteButton = document.createElement("button");
  //newDeleteButton.textContent = "Delete";
  //newDeleteButton.classList.add('delete');
  

//Created a checkbox to complete a task 
  //const complete = document.createElement("input");
  //complete.type = 'checkbox';


    //taskRow.append(complete,newTask, newDeleteButton);
    //taskContainer.append(taskRow);



  

  //newDeleteButton.addEventListener("click", () => {
    //taskRow.remove();
    //localStorage.removeItem('newTask');
  //});

  //complete.addEventListener("change", () => {
    //newTask.style.textDecoration = complete.checked ? "line-through" : "none";
  //})

});

