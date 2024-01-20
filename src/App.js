import React, { useState,useEffect } from "react";

import "./App.scss";

import Header from "./components/Header";
import Task from "./components/Tasks";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask,setShowAddTassk]=useState(true);
  const[tasks,setTasks]=useState([])
  useEffect(()=>{
    const getTasks=async ()=>{
      const tasksfromServer=await fetchTasks()
      setTasks(tasksfromServer)
    }
    getTasks()
  },[])

    //fetch tasks 
    const fetchTasks=async()=>{
      const res =await fetch('http://localhost:5001/tasks')
      const data=await res.json()
      return data
    }

//Add Task
const addTask =(task)=>{
  const id=Math.floor(Math.random()*10000 +1)
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
//Delete Task

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//toggle Reminder
const toggleReminder =(id)=>{
  setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder}: task))
}

 return(
  <>
    <Header 
    onAdd={()=>setShowAddTassk
      (!showAddTask)}
      showAdd={showAddTask} 
      title='Task Tracker' />
    {
      showAddTask && 
      <AddTask 
      onAdd={addTask}/>
    }

    {
    tasks.length >0 ? <Tasks tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toggleReminder}/> 
    :'No Tasks to Show'
    }

  </>
);
};

export default App;