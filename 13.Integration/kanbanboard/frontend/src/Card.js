import React from 'react'
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList'

export default function Card({no, title, description, status, tasks}) {
  return (
    <div className={_Card} key={no}>
      <div className={[Card_Title, Card_Title_Open].join(' ')}>{title}</div>
      <div className='Card_Details'>
        {description}
      </div>
      <TaskList tasks={tasks}/>
    </div>
  )
}
