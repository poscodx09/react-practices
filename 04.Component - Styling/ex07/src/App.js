import React from 'react';
import Header from './Header';
import './assets/scss/App.scss';
import styled from 'styled-components';

export default function() {

    const StyledDiv = styled.div`
        color: gray;
        font-size: 30px;
        border: 1px solid black;
        padding: 8px;
        margin: 8px;
        text-align: center;
    `;

    return (
        <div id={'App'}>
            HIHI
            <StyledDiv>
                ddd
                <Header />
            </StyledDiv>
           
        </div>
    );
}