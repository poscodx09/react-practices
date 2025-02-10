import React from 'react'

function Clock01(props) {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    if (hour < 10){
        hour = '0' + hour
    };

    return (
        <div>
            {hour}
            {':'}
            {min}
            {':'}
            {sec}
        </div>
    );
}

export default Clock01
