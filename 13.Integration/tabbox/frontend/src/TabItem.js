import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem(props) {
    const {no, name, active, contents} = props;

    return (
        <li className={Tab_Item}>{name}</li>
    )
}

export default TabItem