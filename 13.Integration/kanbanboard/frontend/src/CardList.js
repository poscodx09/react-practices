import React from 'react'
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card'

function CardList({title, cards}) {

  return (
    <div className={Card_List} key={title}>
        <h1>{title}</h1>

        {cards && cards.map((item) =>
            <Card
                key={item.no}
                no={item.no}
                title={item.title}
                description={item.description}
            />)}
        
    </div>
  )
}

export default CardList