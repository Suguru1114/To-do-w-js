const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");
const todocontainer = document.querySelector(".container");

addTodo.addEventListener("click", () => {
    displayTodo()
    inputTodo.value = "";
    //to see the input in "inspect > console"
    // console.log(inputTodo.value);
})

function displayTodo(){
    return;
}