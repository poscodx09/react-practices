import React from 'react'
import GroceryListItem from './GroceryListItem'

function GroceryList({groceryList}) {
  return (
    <ol className={"grocery-list"}>
        {groceryList.map((item) => <GroceryListItem key={item.id} name={item.name} value={item.value}/>)}
    </ol>
  )
}


export default GroceryList
