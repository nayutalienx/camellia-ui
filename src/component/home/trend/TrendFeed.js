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
            <div className="trend-feed pl-3 pr-3 pt-1">
                <Bookmark text="СЕЙЧАС ИГРАЮТ" style="default"/>
                <div className="d-flex justify-content-between mt-3" id="play-now-list">
                    <TrendItem name="Crafting Idle Clicker"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/1250790/capsule_184x69.jpg?t=1591256197"/>
                    <TrendItem name="Prophecy"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/1289800/capsule_184x69.jpg?t=1591200544"/>
                    <TrendItem name="Bombs Bot Arena"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/754050/capsule_184x69.jpg?t=1591182922"/>
                    <TrendItem name="Pixel Strike 3D"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/915320/capsule_184x69.jpg?t=1590768063"/>
                    <TrendItem name="ManaRocks"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/762560/capsule_184x69.jpg?t=1590781351"/>
                    <TrendItem name="Golden Moon"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/1312310/capsule_184x69.jpg?t=1590602906"/>
                    <TrendItem name="Noise Hunters"
                               imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/1303440/capsule_184x69.jpg?t=1591207236"/>
                </div>
            </div>
        )
    }

}

export default TrendFeed