import React from 'react'
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card'

function CardList({title, cards}) {
  return (
    <div className={Card_List} key={title}>
        <h1>{title}</h1>

        {cards.map((item) =>
            <Card
                no={item.no}
                title={item.title}
                description={item.description}
                status={item.status}
                tasks={item.tasks}
            />)}
        
    </div>
  )
}

export default CardList