import * as React from "react";
import "./SectionsButton.css"


class SectionsButton extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    render(props) {
        var overrideStyleForForumBtn = {
            background: this.state.hover ? "#1D78B7" : "#3e4d5d",
            color: "white"
        }

        return (
            <div className="sections-button" style={!this.props.isForumBtn ? {} : overrideStyleForForumBtn}
                 onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {this.props.text}
            </div>
        )
    }
}

export default SectionsButton