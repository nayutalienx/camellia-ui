import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/es/Route";
import Me from "./component/me/Me";
import Header from "./component/header/Header";
import "./component/header/Header.css";
import Home from "./component/home/Home";

function App() {
    return (
        <Router>
            <Header/>
            <div className="App">
                {/*<Route path="/home" exact component={Home}/>*/}
                {/*<Route path="/me" exact component={Me}/>*/}
            </div>
        </Router>
    );
}

export default App;
