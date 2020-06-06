import * as React from "react";
import './Home.css'
import TrendFeed from "./trend/TrendFeed";
import Sections from "./section/Sections";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div id="home">
                <TrendFeed/>
                <Sections/>
                {/*<Footer/>*/}
            </div>
        )
    }

}

export default Home