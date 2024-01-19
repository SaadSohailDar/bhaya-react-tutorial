import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete}) => {
  return (
    <div className='task'>
        <h3>{task.Text} <FaTimes onClick={onDelete}/> </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task