import React from 'react'

function GroceryListItem(props) {
    const {id, name, value} = props;
    return (
    <li key={id}>
        <strong>{name}</strong>
        <span>{value}</span>
    </li>
    )
}


export default GroceryListItem
