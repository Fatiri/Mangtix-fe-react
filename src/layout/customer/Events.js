import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Events extends Component {
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
        <li className="nav-item active"><Link className="nav-link" to="/event">Events</Link></li>
        </ul>

        </div>
        </div>
        </nav>
        </div>
        </header>

        <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="img/banner/hero-banner.png" height="500px" alt="First slide"></img>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="img/banner/hero-banner.png" height="500px" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="img/banner/hero-banner.png" height="500px" alt="Third slide"></img>
            </div>
            </div>
            </div>

                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Events</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-2.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Festival Imagination</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-3.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Jogjanan</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-1.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Techno Fest</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Events;
