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
    const handleDeleteTask = (cardNo, taskNo) => {
        const deletedCards = cards.map((item) => {
            if (item.no === cardNo){
                item.tasks = item.tasks.filter((task) => task.no !== taskNo);
                return item;
            }
            return item;
        });
        setCards(deletedCards);
    }

    // task done 처리
    const handleCheckBox = (cardNo, taskNo) => {
        const changedCards = cards.map((item) => {
            if (item.no === cardNo){
                item.tasks = item.tasks.map((task) => {
                    if (task.no === taskNo){
                        task.done = !task.done;
                        return task;
                    }
                    return task;
                });
                return item;
            }
            return item;
        });

        setCards(changedCards);
    }

    return (
        <>
            <CardList title="To Do" cards={toDos} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
            <CardList title="Doing" cards={doings} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
            <CardList title="Done" cards={dones} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} handleCheckBox={handleCheckBox}/>
        </>
    );
}

export default KanbanBoard;