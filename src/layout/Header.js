import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
            <header className="header_area">
            <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav justify-content-end">
            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
        <li className="nav-item"><a className="nav-link" href="speaker.html">Speakers</a></li>
        <li className="nav-item submenu dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
        aria-expanded="false">Events</a>
            <ul className="dropdown-menu">
            <li className="nav-item"><a className="nav-link" href="event-schedule.html">Schedule</a></li>
        <li className="nav-item"><a className="nav-link" href="event-gallery.html">Gallery</a></li>
        <li className="nav-item"><a className="nav-link" href="price.html">Price Ticket</a></li>
        </ul>
        </li>
        </ul>

        <ul className="nav-right text-center text-lg-right py-4 py-lg-0">
            <li><a href="#">Get Ticket</a></li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
        </header>
            < /div>
    );
    }
}

export default Header;