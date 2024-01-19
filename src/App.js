import React, { useState } from "react";

import "./App.scss";

import Header from "./components/Header";
import Task from "./components/Tasks";
import Tasks from "./components/Tasks";


const App = () => {
  const[tasks,setTasks]=useState([
    {
        id:1,
        Text:'Halliluya 1',
        day:'2-3-4',
        reminder:true,
    },
    {
        id:2,
        Text:'Halliluya 2',
        day:'2-3-4',
        reminder:true,
    },
    {
        id:3,
        Text:'Halliluya 3',
        day:'2-3-4',
        reminder:true,
    },
    {
        id:4,
        Text:'Halliluya 4',
        day:'2-3-4',
        reminder:false,
    }
])

//Delete Task

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

 return(
  <>
    <Header title='Task Tracker' />
    {tasks.length>0 ? (
    <Tasks tasks={tasks} 
    onDelete={deleteTask} />
    ):(
      'No tasks to Show'
    )}
  </>
);
};

export default App;