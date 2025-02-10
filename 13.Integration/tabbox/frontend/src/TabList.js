import React from 'react'
import TabItem from './TabItem'

function TabList({data}) {
  return (
    <ul>
        {data.map((item) => <TabItem no={item.no} name={item.name} active={item.active} contents={item.contents}/>)}
    </ul>
  )
}

export default TabList