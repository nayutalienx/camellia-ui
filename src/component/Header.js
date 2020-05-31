import React from "react";
import './Header.css'
import logo from '../logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"

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
                    Основная
                </div>

                <input className="flex-fill ml-2 mr-2 header-search" placeholder="Поиск ..."/>

                <img src={logo} className="header-logo"/>
                <div className="header-item align-self-center">
                    Мой профиль
                </div>
            </header>
        );
    }

}

export default Header
