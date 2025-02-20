import React from 'react';
import {HashRouter} from 'react-router-dom';
import Main from './component/Main';
import Guestbook from './component/Gallery';
import Gallery from './component/Gallery';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Main />}/>
                <Route path={'/guestbook'} element={<Guestbook />}/>
                <Route path={'/gallery'} element={<Gallery />}/>
                <Route path={'*'} element={<Error404 />}/>
            </Routes>
        </HashRouter>
    );
}