import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }])
    setTask("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const completeHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Tasks Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='list'>
          <div className='renderList'>
            <h5 className='task'>{t.task}</h5>
            <h6 className='desc'>{t.desc}</h6>
          </div>
          <button className='delete' onClick={() => {
            { deleteHandler(i) }
          }}>Delete</button>
          <button className='complete' onClick={() => {
            { completeHandler(i) }
          }}>Completed</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter a Task here' value={task} onChange={(e) => {
          setTask(e.target.value)
        }} />
        <input type='text' placeholder='Enter a Description here' value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />

        <button className='addtask'>Add Task</button>
      </form>

      <div className='main'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default App
