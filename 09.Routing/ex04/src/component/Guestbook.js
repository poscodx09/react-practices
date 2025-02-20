import React, { useEffect } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

export default function Guestbook() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // window.location.href = '/gallery';
            navigate('/gallery');
        }, 3000);
    }, []);

    return (
        <div>
             <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/guestbook'>Guestbook</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
            </ul>
            <h1>Guestbook</h1>
        </div>
    );
}