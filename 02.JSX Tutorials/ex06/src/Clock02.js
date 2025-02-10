import React from 'react'
import dayjs from 'dayjs';

function Clock02(props) {
    const now = new Date();
    const hour = now.getHours();
    const sec = now.getSeconds();

    if (hour < 10){
        hour = '0' + hour
    };

    return (
        <div>
            {hour < 10 ? '0' + hour : hour}
            {':'}
            {('0' + now.getMinutes()).slice(-2)}
            {':'}
            {sec}
            <p>{dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss A')}</p>
        </div>
    );
}

export default Clock02
