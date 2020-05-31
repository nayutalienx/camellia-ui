import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./body/Body";

/**
 * Главный компонент сайта
 */
class Main extends React.Component {

    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }

}

export default Main