import React from 'react';

import './assets/scss/App.scss'
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import About from './component/About';
import Error404 from './component/Error404';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/guestbook' element={<Guestbook />}/>
                <Route path='/about' element={<About />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </Router>
    );
}