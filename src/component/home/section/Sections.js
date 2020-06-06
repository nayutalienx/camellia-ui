import * as React from "react";
import UserMiniInfo from "./user-mini-info/UserMiniInfo";
import "./Sections.css"

import DevelopBlog from "./develop-blog/DevelopBlog";
import CategorySection from "./category-section/CategorySection";
import RecommendationSection from "./recommendation-section/RecommendationSection";


class Sections extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="sections">
                <UserMiniInfo/>
                <CategorySection/>
                <RecommendationSection/>
                <DevelopBlog/>
            </div>
        )
    }
}

export default Sections