import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import data from './assets/json/data';
import axios from 'axios';


function KanbanBoard() {

    const [cards, setCards] = useState(data);
    const toDos = cards?.filter((item) => item?.status === 'ToDo');
    const doings = cards?.filter((item) => item?.status === 'Doing');
    const dones = cards?.filter((item) => item?.status === 'Done');


    // 전체 카드 조회
    const getCards = async () => {
        const response = await axios.get(`/kanbanboard/card`);
        console.log('card', response.data.data);
        setCards(response.data.data)
    }

    // // task 추가
    // const handleAddTask = (cardNo, task) => {
    //     const targetCard = cards.find((item) => item.no === cardNo);

    //     if (targetCard != -1){
    //         const updatedCard = {...targetCard, tasks: [...(targetCard.tasks || []), task]};
    //         const filteredCards = cards.filter((item) => item.no !== cardNo);
    //         setCards([...filteredCards, updatedCard]);
    //     }
    // }

    // task 삭제
    // const handleDeleteTask = (cardNo, taskNo) => {
    //     const deletedCards = cards.map((item) => {
    //         if (item.no === cardNo){
    //             item.tasks = item.tasks.filter((task) => task.no !== taskNo);
    //             return item;
    //         }
    //         return item;
    //     });
    //     setCards(deletedCards);
    // }

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


    useEffect(() => {
        getCards();
    }, []);

    return (
        <>
            <CardList title="To Do" cards={toDos} handleCheckBox={handleCheckBox}/>
            <CardList title="Doing" cards={doings} handleCheckBox={handleCheckBox}/>
            <CardList title="Done" cards={dones} handleCheckBox={handleCheckBox}/>
        </>
    );
}

export default KanbanBoard;