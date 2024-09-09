const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");
const todocontainer = document.querySelector(".container");

//adding tasks everytime button pressed
addTodo.addEventListener("click", () => {
    displayTodo()
    inputTodo.value = "";
    //to see the input in "inspect > console"
    // console.log(inputTodo.value);
})


function displayTodo(){
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoText = document.createElement("p");
    todoText.innerText = inputTodo.value;

    let todoActions = document.createElement("div");
    todoActions.classList.add("actioins");

    let checkbox  = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    todoActions.appendChild(checkbox);
    todoActions.appendChild(todoActions);

    todocontainer.appendChild(todo);

    console.log(todoText.innerText);
}