import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/guestbook'>Guestbook</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
            </ul>
            <h1>Main</h1>
        </div>
    );
}