import * as React from "react";
import "./TrendFeed.css"
import TrendItem from "./TrendItem";
import Bookmark from "../../common/Bookmark";

class TrendFeed extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="trend-feed pl-3 pr-3 pt-1 mt-2">
                <Bookmark text="СЕЙЧАС ИГРАЮТ" style="default"/>
                <div className="d-flex justify-content-between">
                    <TrendItem name="1"/>
                    <TrendItem name="2"/>
                    <TrendItem name="3"/>
                    <TrendItem name="4"/>
                    <TrendItem name="5"/>
                    <TrendItem name="6"/>
                    <TrendItem name="7"/>
                    <TrendItem name="8"/>
                </div>
            </div>
        )
    }

}

export default TrendFeed