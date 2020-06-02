import React from "react";
import './Header.css'
import logo from '../../logo.svg';
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
            <header className="d-flex justify-content-around header">
                <img src={logo} className="header-logo"/>

                <div className="header-item align-self-center">
                    <Link to="/home">Основная</Link>
                </div>

                <input className="flex-fill ml-2 mr-2 header-search" placeholder="Поиск ..."/>

                <img src={logo} className="header-logo"/>
                <div className="header-item align-self-center dropdown">
                    Мой профиль
                    <div className="dropdown-content">
                        <div className="dropdown-content-item"><Link to="/me">Мои игры</Link></div>
                        <div className="dropdown-content-item">Настройки</div>
                        <div className="dropdown-content-item">Выход</div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header
