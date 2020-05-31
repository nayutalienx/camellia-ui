import React from "react";
import "./Footer.css"

/**
 * Шапка страницы
 */
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="white-place"></div>
                <div className="d-flex justify-content-between p-3 footer-catcher">
                    <div>Соглашение</div>
                    <div>Конфиденциальность</div>
                    <div>Для правообладателей</div>
                    <div>Карта сайта</div>
                    <div>©camellia</div>
                </div>
            </footer>
        );
    }

}

export default Footer