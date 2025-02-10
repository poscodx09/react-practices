import React from 'react'
import TabItem from './TabItem'

function TabList({data}) {
  return (
    <ul>
        {data.map((item) => <TabItem no={item.no} key={item.no} name={item.name} active={item.active} contents={item.contents}/>).reverse()}
    </ul>
  )
}

export default TabList