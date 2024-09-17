const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");
const todocontainer = document.querySelector(".container");

//adding tasks everytime button pressed
addTodo.addEventListener("click", () => {

    if(inputTodo.value.trim() != ""){
    displayTodo()
    inputTodo.value = "";
    }else{
    //to see the input in "inspect > console"
    // console.log(inputTodo.value);
    alert("Pleaase enter task!!");

    }
})


function displayTodo(){

    //let declairs variables 
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoText = document.createElement("p");
    todoText.innerText = inputTodo.value;

    let todoActions = document.createElement("div");
    todoActions.classList.add("actions");

    let checkbox  = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
// if you wanna add more function, start with the button that wants to add the function 
//then add the .addEventListener
    delBtn.addEventListener("click", () => {
        todocontainer.removeChild(todo);
    })


    //append chicld create new to do tasks in the displayTodo 
    todoActions.appendChild(checkbox);
    todoActions.appendChild(delBtn);

    todo.appendChild(todoText);
    todo.appendChild(todoActions);

    todocontainer.appendChild(todo);
    // console.log(todoText.innerText);
}