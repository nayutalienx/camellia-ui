import * as React from "react";
import './CategorySection.css'

class CategorySection extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="category-section">
                <div id="category-section-nav">
                    <div>
                        ПК
                    </div>
                    <div className="category-section-nav-target">
                        PlayStation
                    </div>
                    <div>
                        XBOX
                    </div>
                    <div>
                        Nintendo
                    </div>
                </div>

                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Новинки
                    </div>
                </button>

                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Осенний сезон
                    </div>
                </button>

                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Летний сезон
                    </div>
                </button>

                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Весенний сезон
                    </div>
                </button>

                <button className="category-section-button">
                    <div className="category-section-button-text">
                        Зимний сезон
                    </div>
                </button>
            </div>
        )
    }
}

export default CategorySection