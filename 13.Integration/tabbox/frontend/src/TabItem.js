import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem(props) {
    const {no, name, active, contents} = props;

    return (
        <li className={[Tab_Item, (active ? 'active' : '')].join(' ')}>{name}</li>
    )
}

export default TabItem