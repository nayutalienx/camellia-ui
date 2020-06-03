import * as React from "react";
import "./ForumInfoItem.css"


class ForumInfoItem extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="forum-info-item d-flex">
                <a href="#">{this.props.name}</a>
                <div className="ml-auto topics-count">
                    {this.props.topicCount} топиков
                </div>
            </div>
        )
    }
}

export default ForumInfoItem