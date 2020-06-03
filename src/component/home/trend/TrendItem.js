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
                <img src="https://cdn.getdroidtips.com/wp-content/uploads/2020/04/csgo-d3d-error-fix.jpg"
                     className="trend-item-image"/>
                <br/>
                game {this.props.name}
            </div>
        )
    }

}

export default TrendItem