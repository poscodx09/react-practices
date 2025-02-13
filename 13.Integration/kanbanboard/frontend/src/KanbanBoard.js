import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import data from './assets/json/data';


function KanbanBoard() {

    const [cards, setCards] = useState(data);
    const toDos = cards?.filter((item) => item?.status === 'ToDo');
    const doings = cards?.filter((item) => item?.status === 'Doing');
    const dones = cards?.filter((item) => item?.status === 'Done');

    // task 추가
    const handleAddTask = (cardNo, task) => {
        const targetCard = cards.find((item) => item.no === cardNo);

        if (targetCard != -1){
            const updatedCard = {...targetCard, tasks: [...(targetCard.tasks || []), task]};
            const filteredCards = cards.filter((item) => item.no !== cardNo);
            setCards([...filteredCards, updatedCard]);
        }
    }

    // task 삭제
    const handleDeleteTask = (cardNo, no) => {
        const deletedCards = cards.map((item) => {
            if (item.no === cardNo){
                item.tasks = item.tasks.filter((task) => task.no !== no);
                return item;
            }
            return item;
        });
        setCards(deletedCards);
    }

    return (
        <>
            <CardList title="To Do" cards={toDos} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask}/>
            <CardList title="Doing" cards={doings} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask}/>
            <CardList title="Done" cards={dones} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask}/>
        </>
    );
}

export default KanbanBoard;