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


                <div className="header-item" id="logo">
                    <Link to="/">
                        <img src={logo} style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "150px",
                            marginLeft: "10px"
                        }}/>
                    </Link>
                </div>

                <div className="header-item w-50">
                    <input type="text" id="search-bar" placeholder="Поиск"/>
                </div>

                <div className="header-item" id="header-profile-bar">

                    <img src={userPhoto} className="icon-photo"/>
                    <div id="profile-link">nayutalienx</div>

                    <div id="profile-dropdown">

                        <div className="profile-dropdown-item">
                            <Link to="/me" style={{
                                textDecoration: 'inherit',
                                color: 'inherit'
                            }}>
                                <img src="https://img.icons8.com/ios-glyphs/90/000000/block-breaker.png"
                                     className="icon-photo dropdown-item-photo"/>
                                <div className="profile-dropdown-item-text">Мои игры</div>
                            </Link>
                        </div>

                        <div className="profile-dropdown-item">
                            <img src="https://img.icons8.com/ios-glyphs/90/000000/xbox-menu.png"
                                 className="icon-photo dropdown-item-photo"/>
                            <div className="profile-dropdown-item-text">Настройки</div>
                        </div>

                        <div className="profile-dropdown-item">
                            <img src="https://img.icons8.com/ios-glyphs/90/000000/pixel-arrow.png"
                                 className="icon-photo dropdown-item-photo"/>
                            <div className="profile-dropdown-item-text">Выход</div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

}

export default Header
