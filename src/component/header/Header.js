import React from "react";
import './Header.css'
import logo from '../../camellialogo.png';
import userPhoto from '../../user.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";

/**
 * Шапка страницы
 */
class Header extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className="d-flex justify-content-between" id="header">


                <div className="header-item" id="logo-text">
                    <img src={logo} style={{
                        "width": "100%",
                        "height": "auto",
                        "max-width": "150px",
                        "margin-left": "10px"
                    }}/>
                </div>

                <div className="header-item w-50">
                    <input type="text" id="search-bar" placeholder="Поиск"/>
                </div>

                <div className="header-item" id="header-profile-bar">

                    <img src={userPhoto} id="user-photo"/>
                    <div id="profile-link">Мой профиль</div>

                </div>
            </div>
        );
    }

}

export default Header
