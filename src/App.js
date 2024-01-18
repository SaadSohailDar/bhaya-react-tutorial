import React, { useState } from "react";
import "./App.scss";
const App = () => {
  const [newItem,setNewItem]=useState("")
  const [todos,setToDos]=useState([])
  //setNewItem("adssadasd");
  function handleSubmit(e){
    e.preventDefault()
    setToDos((currentTodos)=>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(),title:newItem,completed:false},
      ]
    })

    setNewItem("");
  }

  function toggleTodo(id,completed)
  {
    setToDos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id)
        {
        return {...todo,completed}
        }
        return todo
      })
    })
  }

  return( 
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input  value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
    </div>  

    <button className="btn">Add</button>  
    
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo=>{
      return <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.id)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    })}
  </ul>

  </>
);
};

export default App;