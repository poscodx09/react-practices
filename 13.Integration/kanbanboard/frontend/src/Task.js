import React from 'react'
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {
  return (
    <li className={Task} key={no}>
        <input type='checkbox' checked='true'/>{name}
        <a href='#' className={Task_Remove}></a>
    </li>
  )
}

export default Task