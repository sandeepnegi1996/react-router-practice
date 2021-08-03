import Header from "./component/Header.jsx"
import  "./index.css"
import Tasks from "./component/Tasks"

import { useState } from "react"
import Employee from "./component/Employee.jsx"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "first todo",
      day: "12th july 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "second todo",
      day: "12th july 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "third todo",
      day: "12th july 2021",
      reminder: true,
    },
  ])

  const deleteTask=(id) => {

    setTasks(tasks.filter((task)=>task.id!==id));

     console.log("Task is deleted ",id)
  }

  const toggleReminder=(id) => {
     setTasks( tasks.map( (task) => task.id===id ? {...task,reminder:!task.reminder}: task
    ))
  }

  return (
    <div>
      {/* <Header title='Task Tracker' taskNumber='5' />
      <Tasks tasks={tasks} OnDelete={deleteTask}  OnToggle={toggleReminder} /> */}
      <Employee/>
    </div>
  )
}

export default App
