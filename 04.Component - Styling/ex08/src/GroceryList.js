import React from 'react'
import GroceryItem from './GroceryItem'
import styled from 'styled-components';

function GroceryList({groceryList}) {

  const GroceryList = styled.ol`
    padding-left: 50px;
  `

  return (
    <GroceryList>
        {groceryList.map((item) => <GroceryItem key={item.id} name={item.name} value={item.value}/>)}
    </GroceryList>
  )
}


export default GroceryList
