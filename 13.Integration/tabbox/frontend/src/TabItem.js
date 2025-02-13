import React, { useState } from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem(props) {
    const {no, name, active, setSelectTab} = props;

    return (
        <li 
            className={[Tab_Item, (active ? 'active' : '')].join(' ')}
            onClick={() => setSelectTab(no)}
            >
            {name}
        </li>
    )
}

export default TabItem