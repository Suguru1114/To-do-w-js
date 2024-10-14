import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main>

    <h1>Todo List</h1>
    <div className="input-container">
        <input id="input-todo" type="text" placeholder="" />
        <button id ="add-todo">+</button>
    
     </div> 
    <div className="container">
     <div className= "todo"/>
      <p>Write Python</p>
      <div className="actions">
        <input type="checkbox"/>
        <button>Delete</button>
      </div>

    </div>
    </main>
   
  );
}

export default App
 