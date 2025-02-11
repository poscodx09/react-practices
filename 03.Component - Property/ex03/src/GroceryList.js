import React, { Component } from 'react'
import GroceryListItem from './GroceryListItem';

class GroceryList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ol className={"grocery-list"}>
          {this.props.groceryList.map((item) => <GroceryListItem key={item.id} name={item.name} value={item.value}/>)}
      </ol>
    )
  }
}

export default GroceryList;

