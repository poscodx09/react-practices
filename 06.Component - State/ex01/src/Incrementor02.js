import React, { useState } from 'react';

function Incrementor02({onMinus, onPlus, value}) {


    return (
        <div>
            <button onClick={onPlus}>{'+'}</button>
            {' '}
            {value}
            {' '}
            <button onClick={onMinus}>{'-'}</button>
        </div>
    );
}

export default Incrementor02