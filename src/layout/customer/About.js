import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            < div>
                <section class="hero-banner">
                    <div class="container text-center">
                        <h1>MangTix</h1>
                    </div>
                </section>
                <section className="section-padding--small bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
                                <div className="innovative-wrapper">
                                    <p className="h4 primary-text2 mb-3">Where The business World Meets</p>
                                    <p>Morning steas great earth for divide our good sixth called abunda itseld appear
                                        fisrd seaton upon above may bearing all moveth morning make subdue stars they
                                        are a goreat eart divide our good sixth one of that</p>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-xl-5">

                                <ul className="clockdiv text-center" id="clockdiv">
                                    <li className="clockdiv-single clockdiv-day">
                                        <h1 className="days">320</h1>
                                        <span className="smalltext">Days</span>
                                    </li>
                                    <li className="clockdiv-single clockdiv-hour">
                                        <h1 className="hours">30</h1>
                                        <span className="smalltext">Hours</span>
                                    </li>
                                    <li className="clockdiv-single clockdiv-minute">
                                        <h1 className="minutes">30</h1>
                                        <span className="smalltext">Mins</span>
                                    </li>
                                </ul>

                                <div className="clockdiv-content text-center">
                                    <p className="h4 primary-text2 mb-2">January 20 -22, 2019 in Buffelo City</p>
                                    <a className="button button-link" href="#">Get Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-margin">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Why Join MangTix</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>


                        <div className="d-lg-flex justify-content-between">
                            <div className="card-feature mb-5 mb-lg-0">
                                <div className="feature-icon">
                                    <i className="flaticon-prize"></i>
                                </div>
                                <h3>Always First Service</h3>
                                <p>His likeness beast moved domini moved above meat all fly blessed greater creepeth you
                                    itself living room </p>
                            </div>

                            <div className="card-feature mb-5 mb-lg-0">
                                <div className="feature-icon">
                                    <i className="flaticon-earth-globe"></i>
                                </div>
                                <h3>International Business</h3>
                                <p>His likeness beast moved domini moved above meat all fly blessed greater creepeth you
                                    itself living room </p>
                            </div>

                            <div className="card-feature mb-5 mb-lg-0">
                                <div className="feature-icon">
                                    <i className="flaticon-sing"></i>
                                </div>
                                <h3>World Great Speaker</h3>
                                <p>His likeness beast moved domini moved above meat all fly blessed greater creepeth you
                                    itself living room </p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <a className="button mr-3 mb-2" href="#">Learn More</a>
                                <a className="button mb-2" href="#">Buy Ticket</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
