import React from 'react'
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, cardNo, handleDeleteTask}) {
  return (
    <li className={Task} key={no}>
        <input type='checkbox' checked='true'/>{name}
        <a href='#' className={Task_Remove} onClick={() => handleDeleteTask(cardNo, no)}></a>
    </li>
  )
}

export default Task