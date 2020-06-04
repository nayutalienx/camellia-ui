import * as React from "react";
import "./SectionsMain.css"
import Bookmark from "../../../common/Bookmark";
import SectionsButton from "./sections-button/SectionsButton";

class SectionsMain extends React.Component {

    constructor() {
        super();

        this.state = {
            currentSection: "ПК"
        }
    }

    render() {
        return (
            <div className="sections-main">
                <div className="d-flex justify-content-between">
                    <div className="sections-main-link">ПК</div>
                    <div className="sections-main-link ">PlayStation</div>
                    <div className="sections-main-link">XBOX</div>
                    <div className="sections-main-link">Mobile</div>
                    <div className="sections-main-link">Nintendo</div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <div className="w-50 mr-4 pr-2">
                        <Bookmark text="ПК" style="red"/>
                        <SectionsButton text="Новинки"/>
                        <SectionsButton text="Летний сезон"/>
                        <SectionsButton text="Весенний сезон"/>
                        <SectionsButton text="Зимний сезон"/>
                        <SectionsButton text="Осенний сезон"/>
                    </div>
                    <div className="w-50">
                        <Bookmark text="Рекомендации" style="blue"/>
                        <SectionsButton text="Избранное"/>
                        <SectionsButton text="От сообщества"/>
                        <SectionsButton text="Персонализирован..."/>
                        <SectionsButton text="Студии"/>

                    </div>
                </div>


            </div>
        )
    }

}

export default SectionsMain