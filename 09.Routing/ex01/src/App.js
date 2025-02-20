import React, { useEffect, useState } from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

export default function App() {

    /**
     * http://localhost:9090/ -> Main
     * http://localhost:9090/#/ -> Main
     * http://localhost:9090/#/guestbook -> Guestbook
     * http://localhost:9090/#/gallery -> Gallery
     */

    const [route, setRoute] = useState('');

    const hashchangeHandler = () => {
        console.log('hash change??');
        console.log(window.location.hash.replace('#', ''))
        setRoute(window.location.hash.replace('#', '') || '/');

    }

    useEffect(() => {
        window.addEventListener('hashchange', hashchangeHandler);

        return () => {
            window.removeEventListener('hashchange', hashchangeHandler);
        }
    }, []);

    return (
        <>
            <ul>
                <li><a href="/#/main">main</a></li>
                <li><a href="/#/guestbook">guestbook</a></li>
                <li><a href="/#/gallery">gallery</a></li>
            </ul>
        {
            (() => {
                switch(route) {
                    case '' :
                    case '/' :
                        return <Main />;
                    case '/guestbook' :
                        return <Guestbook />;
                    case '/gallery':
                        return <Gallery />;
                    default :
                        return <Error404 />;
                }
            })()
        }
        </>
    );
}