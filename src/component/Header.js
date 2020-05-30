import React from "react";
import './Header.css'
import logo from '../logo.svg'

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
            <header className="header">
                <img src={logo} className="header-logo"/>

                <div className="header-item">
                    Основная
                </div>

                <input className="header-search"/>

                <div className="header-item">
                    <img src={logo} className="header-logo"/>
                    <div className="header-profile-item">
                        Мой профиль
                    </div>
                </div>
            </header>
        );
    }

}

export default Header
