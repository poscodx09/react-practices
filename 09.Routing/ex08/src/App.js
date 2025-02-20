import React from 'react';
import './assets/scss/App.scss'
import Main from './component/Main';
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import About from './component/About';
import Error404 from './component/Error404';
import SiteLayout from './layout/SiteLayout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {

    return <Router>
        <Routes>
            <Route path="/" element={<SiteLayout/>}>
                <Route path='' element={<Main />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/guestbook' element={<Guestbook />}/>
                <Route path='/about' element={<About />}/>
                <Route path='*' element={<Error404 />}/>
            </Route>
        </Routes>
    </Router>

}