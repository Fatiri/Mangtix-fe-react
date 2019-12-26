import React, {Component} from 'react';
import Switcer from "./components/Switcer";
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <Router>
            <div id="wrapper">
                <Switcer/>
            </div>
            </Router>
        );
    }
}
