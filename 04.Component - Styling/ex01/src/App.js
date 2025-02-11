import React from 'react';

function App() {

    const h1Style = {
        color: 'blue',
        fontSize: '60px',
        letterSpacing: '4px',
        lineHeight: '16px'
    }
    
    return (
        <div id={'App'}>
            <h1 style={h1Style}>inline styling</h1>
        </div>
    );
}

export default App;