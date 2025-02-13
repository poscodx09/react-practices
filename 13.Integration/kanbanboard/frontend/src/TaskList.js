import React, { useState } from 'react'
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task'

function TaskList({no, tasks, handleAddTask, handleDeleteTask}) {

    const [task, setTask] = useState({
        no: -1,
        name: '',
        done: false
    });

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            handleAddTask(no, task);
            setTask({
                no: -1,
                name: '',
                done: false
            });
        }
    }

    return (
        <div className={Task_List}>
            <ul>
                {tasks?.map((item) => 
                    <Task no={item.no} name={item.name} done={item.done} cardNo={no} handleDeleteTask={handleDeleteTask}/>
                )}
            </ul>
            <input value={task.name} className={Input_Add_Task} type='text' placeholder='태스크 추가' onChange={(e) => setTask({...task, name: e.target.value})} onKeyDown={handleKeyDown}/>
        </div>
    )
}

export default TaskList