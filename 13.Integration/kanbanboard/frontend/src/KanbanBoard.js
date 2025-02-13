import React from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import data from './assets/json/data';


function KanbanBoard() {

    const toDoCards = data.filter((item) => item.status === 'ToDo');
    const doingCards = data.filter((item) => item.status === 'Doing');
    const doneCards = data.filter((item) => item.status === 'Done');

    return (
        <>
            <CardList title="To Do" cards={toDoCards}/>
            <CardList title="Doing" cards={doingCards}/>
            <CardList title="Done" cards={doneCards}/>
        </>
    );
}

export default KanbanBoard;