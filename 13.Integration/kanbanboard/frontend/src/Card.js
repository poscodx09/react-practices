import React, { useState } from 'react'
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList'
import axios from 'axios';

export default function Card({no, title, description, handleCheckBox}) {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    // task 목록 조회
    const getTasks = async () => {
      await axios.get(`/kanbanboard/task?cardNo=${no}`).then((res) => {
        setTasks(res.data.data);
      });
    }

    const handleClick = () => {
      getTasks();
      setOpen(!open);
    }

    // task 추가
    const handleAddTask = async (task) => {
      console.log(task);
      await axios.post(`/kanbanboard/task`, task).then((res) => {
        setTasks([...tasks, res.data.data])
      })
    }

    // task 삭제
    const handleDeleteTask = (taskNo) => {
      axios.delete(`/kanbanboard/task/${taskNo}`).then((res) => {
        const filteredTasks = tasks.filter((task) => task.no !== res.data.data);
        setTasks(filteredTasks)
      })
    }

    return (
    <div className={_Card} key={no}>
      <div className={[Card_Title, open ? Card_Title_Open : ''].join(' ')} onClick={handleClick}>{title}</div>

      <div className='Card_Details'>
        {description}
      </div>
      {
        open && <TaskList no={no} tasks={tasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
      }
    </div>
  )
}
