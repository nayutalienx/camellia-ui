import * as React from "react";
import UserMiniInfo from "./user-mini-info/UserMiniInfo";
import "./Sections.css"
import SectionsMain from "./sections-main/SectionsMain";


class Sections extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="d-flex sections">
                <UserMiniInfo/>
                <SectionsMain/>
            </div>
        )
    }
}

export default Sections