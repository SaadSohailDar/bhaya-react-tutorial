import { useState } from 'react'

import React from 'react'

const  AddTask = ({onAdd}) => {
    const [text,setText]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setReminder]=useState(false);
    const onSubmit=(e)=>{
        
        if(!text){
            alert('Please Add Task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (

    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input 
            type='text'
            placeholder='Add Task'
            value={text} 
            onChange={(e)=>
            setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day and time</label>
            <input type='text' value={day} 
            onChange={(e)=>
            setDay(e.target.value)} placeholder='Add Day and time'></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder} 
            onChange={(e)=>
            setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save task' className='btn btn-block'></input>
    </form>
  )
}

export default AddTask
