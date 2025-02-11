import React from 'react';
import TabList from './TabList';
import data from './assets/json/data';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox() {
  return (
    <div className={Tab_Box}>
        <TabList data={data}/>
        <TabView/>
    </div>
  )
}

export default TabBox