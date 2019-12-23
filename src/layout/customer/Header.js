import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
            <header className="header_area">
            <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></img></a>
        <button className="navbar-toggler" type="button" // noinspection JSAnnotator
        data-toggle="collapse" // noinspection JSAnnotator
        data-target="#navbarSupportedContent" // noinspection JSAnnotator
        aria-controls="navbarSupportedContent" // noinspection JSAnnotator
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav justify-content-end">
            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
        <li className="nav-item"><Link className="nav-link" to="/event">Events</Link></li>
        </ul>

        </div>
        </div>
        </nav>
        </div>
        </header>
            </div>
    );
    }
}

export default Header;
