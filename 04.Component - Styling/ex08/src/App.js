import React from 'react';
import GroceryList from './GroceryList';
import {title} from './assets/scss/App.scss';

function App(props) {
    const groceryList = [
        {id: 1, name: 'Bread', value: 10},
        {id: 2, name: 'Milk', value: 20},
        {id: 3, name: 'Egg', value: 30}
    ]
    return (
        <div id={'App'}>
            <h1 className={title}>{'Grocery List'}</h1>
            <GroceryList groceryList={groceryList} />
        </div>
    );
}

export default App;