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
    return;
}

function displayTodo(){
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoText = document.createElement("p");
    todoText.innerText = inputTodo.value;

    console.log(todoText.innerText);
}