import React from 'react'
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList'

export default function Card({no, title, description, status, tasks, handleAddTask, handleDeleteTask, handleCheckBox}) {
  return (
    <div className={_Card} key={no}>
      <div className={[Card_Title, Card_Title_Open].join(' ')}>{title}</div>
      <div className='Card_Details'>
        {description}
      </div>
      <TaskList no={no} tasks={tasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
    </div>
  )
}
