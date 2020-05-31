import * as React from "react";
import './Body.css'
import TrendFeed from "./trend/TrendFeed";
import Sections from "./section/Sections";

class Body extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="body">
                <TrendFeed/>
                <Sections/>
            </div>
        )
    }

}

export default Body