import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from '../../ex01/src/component/Error404';



const Router = () => {
    const [route, setRoute] = useState({page: '/'});
    let component = null;

    switch(route.page) {
        case '' :
        case '/' :
            component = <Main />;
            break;
        case '/guestbook' :
            component = <Guestbook />;
            break;
        case '/gallery':
            component = <Gallery />;
            break;
        default :
            component = <Error404 />;
    }

    return component;
};




export default function App() {

    const clickHandler = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        window.history.pushState({page: url}, e.target.txt, url);

    }

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={clickHandler}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={clickHandler}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={clickHandler}>[Guestbook]</a></li>
            </ul>
            <Router />
        </div>
    )
}