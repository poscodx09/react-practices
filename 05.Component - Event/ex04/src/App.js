import React, { useRef } from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {

    const imgRef = useRef(null);

    const onKeyUpInput = (e) => {
        console.log('keyup:', e.target.value)
    }
    const onMouseMoveImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        console.log('mouseover', e.clientX-offsetLeft, e.clientY-offsetTop);
    }


    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyUp={onKeyUpInput}
                />
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={{
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                }}
                src={logo}
                onMouseMove={onMouseMoveImg}
            />
        </>
    );
}