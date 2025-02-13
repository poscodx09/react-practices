import React, { useState } from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem(props) {
    const {no, name, active, contents, selectTab, setSelectTab} = props;

    return (
        <li 
            className={[Tab_Item, (selectTab === no ? 'active' : '')].join(' ')}
            onClick={() => setSelectTab(no)}
            >
            {name}
        </li>
    )
}

export default TabItem