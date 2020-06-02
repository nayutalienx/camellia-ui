import * as React from "react";
import Header from "../header/Header";

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                <h4>Hi, this is UserProfile!</h4>
            </div>
        );
    }

}

export default UserProfile