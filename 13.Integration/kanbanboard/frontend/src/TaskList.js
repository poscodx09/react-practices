import React from 'react'
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task'

function TaskList({tasks}) {
  return (
    <div className={Task_List}>
        <ul>
            {tasks?.map((item) => 
                <Task no={item.no} name={item.name} done={item.done}/>
            )}
        </ul>
        <input className={Input_Add_Task} type='text' placeholder='태스크 추가'></input>
    </div>
  )
}

export default TaskList