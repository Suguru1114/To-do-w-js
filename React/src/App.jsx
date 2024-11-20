import { useState } from 'react'
import './App.css'

function App() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    function writeTodo(e){ 
      setInputVal(e.target.value);
      console.log(inputVal);

    }

  
    function addTodo(){
      if (inputVal != ""){
      setTodos(prevTodos => [...prevTodos, inputVal]);
      setInputVal("")

      }
    }

     function delTodo(todoIndex) {
      setTodos((prevTodos) =>
        prevTodos.filter((prevTodo, prevTodoIndex) => {
          return prevTodoIndex != todoIndex;
        })
      );
     }

  return (
    <main>

    <h1>Todo List React</h1>
    <div className="input-container">
        <input 
        type="text" 
        placeholder="Enter Todo" 
        value = {inputVal}
        onChange={writeTodo} 

        />
        <button onClick={addTodo}>+</button>
    </div>

    <div className="container">
    {todos.map((todo, index) => {
      return(
          <div className= "todo" key={todo}>
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox"/>
        <button onClick={() => delTodo(index)}>Delete</button>        
        </div>
      </div>
        );
      })}
    </div>
    </main>
   
  );
}

function InputContainer(){
  return (

    <div className="input-container">
        <input 
        type="text" 
        placeholder="Enter Todo" 
        value = {inputVal}
        onChange={writeTodo} 

        />
        <button onClick={addTodo}>+</button>
    </div>
  )
}

export default App
 