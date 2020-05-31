import * as React from "react";
import "./UserMiniInfo.css"
import UserMiniInfoItem from "./UserMiniInfoItem";


class UserMiniInfo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="user-mini-info">

                <p className="font-weight-bold m-0">Мой список игр</p>

                <UserMiniInfoItem name="Запланировано" count="10"/>
                <UserMiniInfoItem name="Играю" count="22"/>
                <UserMiniInfoItem name="Переигрываю" count="22"/>
                <UserMiniInfoItem name="Пройдено" count="22"/>
                <UserMiniInfoItem name="Отложено" count="22"/>
                <UserMiniInfoItem name="Брошено" count="22"/>

                <p className="font-weight-bold m-0 mt-2">Моя история</p>
                <UserMiniInfoItem name="GTA San Andreas" count="2 дня назад"/>
                <UserMiniInfoItem name="Valorant" count="5 дней назад"/>
                <UserMiniInfoItem name="Nier:Automata" count="Месяц назад"/>

            </div>
        )
    }
}

export default UserMiniInfo