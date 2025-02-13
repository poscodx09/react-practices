import React from 'react';
import {Tab_View} from './assets/scss/TabView.scss';

function TabView({content}) {

  return (
    <div className={Tab_View}>
            {content}
    </div>
  )
}

export default TabView