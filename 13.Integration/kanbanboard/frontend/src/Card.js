import React, { useState } from 'react'
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList'

export default function Card({no, title, description, status, tasks, handleAddTask, handleDeleteTask, handleCheckBox}) {
    const [open, setOpen] = useState(true);

    return (
    <div className={_Card} key={no}>
      <div className={[Card_Title, open ? Card_Title_Open : ''].join(' ')} onClick={() => setOpen(!open)}>{title}</div>

      <div className='Card_Details'>
        {description}
      </div>
      {
        open && <TaskList no={no} tasks={tasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
      }
    </div>
  )
}
