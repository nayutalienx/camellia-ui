import React from "react";
import "./Bookmark.css"

class Bookmark extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(props) {

        const styles = {
            "default": {
                background: "#E8EBEF",
                color: "black",
                borderLeft: "5px solid #D8DDE4"
            },
            "red": {
                background: "#FEDDDF",
                color: "#fc575e",
                borderLeft: "5px solid #FEC2C5"
            },
            "orange": {
                background: "#FFE8D8",
                color: "#ff8a3c",
                borderLeft: "5px solid #FFD5B8"
            },
            "blue": {
                background: "#DAF1FF",
                color: "#44BBFF",
                borderLeft: "5px solid #BCE6FF"
            }
        }

        var styleToUse;
        if (this.props.style === "default" || !this.props.style)
            styleToUse = styles.default

        if (this.props.style === "red")
            styleToUse = styles.red

        if (this.props.style === "orange")
            styleToUse = styles.orange

        if (this.props.style === "blue")
            styleToUse = styles.blue

        var linkTextColor = {
            color: styleToUse.color
        }

        return (
            <div className="bookmark" style={styleToUse}>
                <a href="#" style={linkTextColor}>{this.props.text}</a>
            </div>
        )
    }

}

export default Bookmark