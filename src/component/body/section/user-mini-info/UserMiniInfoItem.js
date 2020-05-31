import * as React from "react";
import "./UserMiniInfoItem.css"

class UserMiniInfoItem extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(props) {
        return (
            <div className="user-mini-info-item d-flex">
                <a href="#">{this.props.name}</a>
                <div className="ml-auto">
                    {this.props.count}
                </div>
            </div>
        )
    }

}

export default UserMiniInfoItem