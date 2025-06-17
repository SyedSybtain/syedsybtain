import React, { useState } from 'react'

function ToDoApp() {
    const [tasks,setTasks] = useState([])
    const [newTask,setNewTask] = useState("")

    function addTask() {
        const pushTask = newTask
        setTasks(tasks => [...tasks,pushTask])
        setNewTask("")
    }

    function removeTask(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }

  return (
    <div className='w-[90%] h-[700px] rounded p-1 mt-4 flex flex-col items-center self-center gap-4 text-black'>
        <div className='text-2xl sm:text-3xl md:text-4xl'>ToDo-Application</div>
        <div className=''>
            <input className='text-black p-2 rounded-xl' type="text" value={newTask} placeholder='Add Task ...' onChange={(e) => setNewTask(e.target.value)}/>
            <button className='ml-1 bg-black text-white p-1 rounded' onClick={addTask}>Add Task </button>
        </div>
        <div className='w-[60%] h-[100%] text-left p-4 rounded overflow-auto self-center'>
            {tasks.map((task,index) => <li key={index}> {task} 
                <button className='' onClick={() => removeTask(index)}>❌</button>
            </li> )}
        </div>
    </div>
  )
}

export default ToDoApp