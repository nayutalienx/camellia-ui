import React from "react";
import "./Bookmark.css"

class Bookmark extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(props) {

        return (
            <div className="bookmark">
                {this.props.text}
            </div>
        )
    }

}

export default Bookmark