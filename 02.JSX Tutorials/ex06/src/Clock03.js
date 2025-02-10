import React from 'react'
import dayjs from 'dayjs';

function Clock03({date}) {
    const hour = date.getHours();
    const sec = date.getSeconds();

    if (hour < 10){
        hour = '0' + hour
    };

    return (
        <div>
            {hour < 10 ? '0' + hour : hour}
            {':'}
            {('0' + date.getMinutes()).slice(-2)}
            {':'}
            {sec}
            <p>{dayjs(date).format('YYYY/MM/DD HH:mm:ss A')}</p>
        </div>
    );
}

export default Clock03;
