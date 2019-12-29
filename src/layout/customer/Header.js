import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Events from "./Events";

class Header extends Component {
    render() {
        return (
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                <div className="container">
                    <div className="row align-items-center position-relative">


                        <div className="site-logo">
                            <a href="index.html" className="text-black"><span className="text-primary"/>Mangtix</a>
                        </div>

                        <div className="col-12">
                            <nav className="site-navigation text-right ml-auto " role="navigation">

                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li><Link className="nav-link" to="/#">Home</Link></li>
                                    <li><a href="#services-section" className="nav-link">Services</a></li>
                                    <li><a href="#why-us-section" className="nav-link">Why Us</a></li>

                                    <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                                    <li><Link className="nav-link" to="/chat-form">Forum</Link></li>
                                    <li><Link className="nav-link" to="/event">Events</Link></li>
                                    <li className="has-children">
                                        <a className="nav-link">Profile</a>
                                        <ul className="dropdown arrow-top">
                                            <li><Link className="nav-link" to="/cart">Cart</Link></li>
                                            <li><a href="#pricing-section" className="nav-link">Setting</a></li>
                                            <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                                            <li className="has-children">
                                                <a href="#">More Links</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Menu One</a></li>
                                                    <li><a href="#">Menu Two</a></li>
                                                    <li><a href="#">Menu Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                        <div className="toggle-button d-inline-block d-lg-none">
                            <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black">
                                <span className="icon-menu h3"></span></a></div>

                    </div>
                </div>
            </header>

    );
    }
    }

    export default Header;
