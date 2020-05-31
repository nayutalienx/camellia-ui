import * as React from "react";
import "./TrendFeed.css"
import TrendItem from "./TrendItem";

class TrendFeed extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="trend-feed pl-2 pr-2 pt-1">
                <h4 className="pl-2 trend-feed-header">Сейчас играют</h4>
                <div className="d-flex justify-content-around">
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