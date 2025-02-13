import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import data from './assets/json/data.js';

function App() {
    const [emails, setEmails] = useState(data);

    const searchEmail = (keyword) => {
        const lowerKeyword = keyword.toLowerCase();
        const newEmails = data.filter((item) => {
            const {firstName, lastName, email} = item;
            return (firstName.toLowerCase()).includes(lowerKeyword) || (lastName.toLowerCase()).includes(lowerKeyword) || (email.toLowerCase()).includes(lowerKeyword);
        })
        setEmails(newEmails);
    }

    return (
        <div id={'App'}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail}/>
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;