import React, { useState } from 'react';
import TabList from './TabList';
import data from './assets/json/data';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox() {

  const [selectTab, setSelectTab] = useState(null);

  return (
    <div className={Tab_Box}>
        <TabList data={data} selectTab={selectTab} setSelectTab={(no) => setSelectTab(no)}/>
        <TabView data={data} selectTab={selectTab}/>
    </div>
  )
}

export default TabBox