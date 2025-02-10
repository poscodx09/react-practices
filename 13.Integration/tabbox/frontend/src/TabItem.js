import React from 'react'

function TabItem(props) {
    const {no, name, active, contents} = props;

    return (
        <li className={active ? 'active' : ''}>{name}</li>
    )
}

export default TabItem