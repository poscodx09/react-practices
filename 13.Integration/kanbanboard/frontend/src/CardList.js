import React from 'react'
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card'

function CardList({title, cards, handleAddTask, handleDeleteTask}) {

  return (
    <div className={Card_List} key={title}>
        <h1>{title}</h1>

        {cards && cards.map((item) =>
            <Card
                no={item.no}
                title={item.title}
                description={item.description}
                status={item.status}
                tasks={item.tasks}
                handleAddTask={handleAddTask}
                handleDeleteTask={handleDeleteTask}
            />)}
        
    </div>
  )
}

export default CardList