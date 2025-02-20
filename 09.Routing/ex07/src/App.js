import React from 'react';

import './assets/scss/App.scss'
import {useRoutes} from 'react-router-dom';
import Main from './component/Main';
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import About from './component/About';
import Error404 from './component/Error404';

export default function App() {

    return useRoutes([
        {path: '/', element: <Main />},
        {path: '/gallery', element: <Gallery />},
        {path: '/guestbook', element: <Guestbook />},
        {path: '/about', element: <About />},
        {path: '*', element: <Error404 />},
    ])

}