import React from 'react'
import TabList from './TabList'
import data from './assets/json/data'
import TabView from './TabView'

function TabBox() {
  return (
    <div className={"tab-box"}>
        <TabList data={data}/>
        <TabView/>
    </div>
  )
}

export default TabBox