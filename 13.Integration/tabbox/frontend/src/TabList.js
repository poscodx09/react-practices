import React from 'react'
import TabItem from './TabItem'
import {_Tabs} from './assets/scss/Tabs.scss';

function TabList({data, selectTab, setSelectTab}) {
  return (
    <ul className={_Tabs}>
        {data.map((item) => <TabItem no={item.no} key={item.no} name={item.name} active={item.active} contents={item.contents} selectTab={selectTab} setSelectTab={setSelectTab}/>).reverse()}
    </ul>
  )
}

export default TabList