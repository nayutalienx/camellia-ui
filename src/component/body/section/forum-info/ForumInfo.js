import * as React from "react";
import "./ForumInfo.css"
import SectionsButton from "../sections-main/sections-button/SectionsButton";
import ForumInfoItem from "./ForumInfoItem";
import Bookmark from "../../../common/Bookmark";

class ForumInfo extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="d-flex flex-column forum-info ml-3">
                <SectionsButton text="Форум" isForumBtn="true"/>
                <ForumInfoItem name="Игры" topicCount="3447"/>
                <ForumInfoItem name="Сайт" topicCount="6447"/>
                <ForumInfoItem name="Оффтопик" topicCount="5447"/>
                <ForumInfoItem name="Сайт" topicCount="447"/>
                <div className="mt-2"></div>
                <Bookmark text="Турниры" style="green"/>
                <div><a href="#">Лучшее RPG сезона</a></div>
            </div>
        )
    }
}

export default ForumInfo

