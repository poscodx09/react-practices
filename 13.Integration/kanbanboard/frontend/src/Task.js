import React from 'react'
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, handleDeleteTask, handleCheckBox}) {

    return (
        <li className={_Task} key={no}>
            <input type='checkbox' checked={done} onChange={() => handleCheckBox(cardNo, no)}/>{name}
            <a href='#' className={Task_Remove} onClick={() => handleDeleteTask(no)}></a>
        </li>
    )
}

export default Task