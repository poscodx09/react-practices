import React, { useState } from 'react';
import Incrementor01 from './Incrementor01';
import Incrementor02 from './Incrementor02';

function App() {

    const [value, setValue] = useState(
        {
            num1: 0,
            num2: 0
        }
    );

    return (
        <>
            <h2>ex04 - Component State?</h2>
            <Incrementor01 
                value={value.num1} 
                onMinus={() => setValue(prev => ({ ...prev, num1: prev.num1 - 1 }))} 
                onPlus={() => setValue(prev => ({ ...prev, num1: prev.num1 + 1 }))}
            />
            <br/>
            <Incrementor02 
                value={value.num2} 
                onMinus={() => setValue(prev => ({ ...prev, num2: prev.num2 - 1 }))} 
                onPlus={() => setValue(prev => ({ ...prev, num2: prev.num2 + 1 }))}
            />
        </>
    );
}

export default App;