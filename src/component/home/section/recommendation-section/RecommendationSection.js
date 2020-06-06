import * as React from "react";
import './RecommendationSection.css'
import Bookmark from "../../../common/Bookmark";

class RecommendationSection extends React.Component {

    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <div className="recommendation-section">
                <Bookmark text="Рекомендации"/>
                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Избранное
                    </div>
                </button>
                <button className="category-section-button">
                    <div className="category-section-button-text">
                        От сообщества
                    </div>
                </button>
                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Персонализированные
                    </div>
                </button>
                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Студии
                    </div>
                </button>
            </div>

        )
    }

}

export default RecommendationSection