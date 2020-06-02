import React from 'react';
import Main from './component/Main'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/es/Route";
import UserProfile from "./component/profile/UserProfile";

function App() {
    return (
        <Router>
            <div className="App">

                <Route path="/home" exact component={Main}/>

                <Route path="/me" exact component={UserProfile}/>

            </div>
        </Router>
    );
}

export default App;
