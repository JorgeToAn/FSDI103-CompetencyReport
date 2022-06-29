function addTask(){
    let newTask = document.getElementById("taskName").value;   //reads the input
    //verifying the input is not empty
    if(newTask === ""){
        alert("Task must be filled out");
    } else{
        taskArray.push(newTask);                                          //adds the task to the array
        displayTasks();                                            //refreshes the task list
        document.getElementById("taskName").value = "";            //clears the input
    }
}
function displayTasks(){
    document.getElementById("tasks").innerHTML = "";           //clears the list
    //adds each task that is in the array
    //each li element gets an id according to its index in the array
    for(let i=0; i<taskArray.length; i++){
        document.getElementById("tasks").innerHTML += `
            <li id="${i}"><div><i class="fa-solid fa-bars"></i>${taskArray[i]}</div><button onclick="deleteTask(${i})"><i class="fa-solid fa-circle-minus"></i></button></li>`;
    }
}
function deleteTask(id){
    document.getElementById(`${id}`).remove();                  //removes the corresponding element from the html
    taskArray.splice(id, 1);                                    //removes the task from the array
    displayTasks();                                             //refreshes the task list
}
function clearTasks(){
    document.getElementById("tasks").innerHTML = "";            //clears the html list
    taskArray = [];                                             //empties the array
}

let taskArray = [];
//adds an event listener for the text input
//when you press enter on the input it will trigger the click event for the add task button
document.getElementById("taskName").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("taskAdd").click();
    }
});