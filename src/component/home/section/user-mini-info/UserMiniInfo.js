import * as React from "react";
import "./UserMiniInfo.css"


class UserMiniInfo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="user-mini-info">
                <div id="user-mini-info-header">
                    Мой список игр
                </div>
                <div id="user-mini-info-content">
                    <div className="user-mini-info-item">
                        <div>
                            Запланировано
                        </div>
                        <div>
                            10
                        </div>
                    </div>

                    <div className="user-mini-info-item">
                        <div>
                            Пройдено
                        </div>
                        <div>
                            566
                        </div>
                    </div>

                    <div className="user-mini-info-item">
                        <div>
                            Брошено
                        </div>
                        <div>
                            47
                        </div>
                    </div>

                    <div className="user-mini-info-item">
                        <div>
                            Переигрываю
                        </div>
                        <div>
                            5
                        </div>
                    </div>

                    <div className="user-mini-info-item">
                        <div>
                            Отложено
                        </div>
                        <div>
                            15
                        </div>
                    </div>

                    <div id="user-mini-info-item-history">
                        <div>Моя история</div>
                        <div className="user-mini-info-item">
                            <div>Life is Strange</div>
                            <div>254 месяца назад</div>
                        </div>
                        <div className="user-mini-info-item">
                            <div>Fallout 4</div>
                            <div>4 дня назад</div>
                        </div>
                        <div className="user-mini-info-item">
                            <div>Metro Exodus</div>
                            <div>2 месяца назад</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserMiniInfo