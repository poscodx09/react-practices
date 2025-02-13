import React, { useState } from 'react';
import TabList from './TabList';
import data from './assets/json/data';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox() {

  const [selectedContent, setSelectedContent] = useState("");
  const [tabs, setTabs] = useState([...data]);

  const handleSelectedTab = (no) => {
    const copiedData = [...data];
    const newData = copiedData.map((item) => {
      if (item.no === no){
        item.active = true;
        setSelectedContent(item.contents);
      }
      return item;
    });

    setTabs(newData);
  }

  return (
    <div className={Tab_Box}>
        <TabList data={tabs} setSelectTab={handleSelectedTab}/>
        <TabView content={selectedContent}/>
    </div>
  )
}

export default TabBox