import * as React from "react";
import './Home.css'
import TrendFeed from "./trend/TrendFeed";
import Sections from "./section/Sections";
import Footer from "./footer/Footer";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <TrendFeed/>
                <Sections/>
                <Footer/>
            </div>
        )
    }

}

export default Home