import React from 'react'
import {Grocery_Item} from "./assets/scss/GroceryItem.scss";

function GroceryItem(props) {
    const {id, name, value} = props;
    return (
    <li key={id} className={Grocery_Item}>
        <strong>{name}</strong>
        <span>{value}</span>
    </li>
    )
}


export default GroceryItem
