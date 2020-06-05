import * as React from "react";
import "./TrendItem.css"

class TrendItem extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }

    render(props) {
        return (
            <div className="trend-item">
                <img src={this.props.imgUrl}
                     className="trend-item-image"/>
                <br/>
                <div className="trend-item-text">
                    {this.props.name}
                </div>
            </div>
        )
    }

}

export default TrendItem