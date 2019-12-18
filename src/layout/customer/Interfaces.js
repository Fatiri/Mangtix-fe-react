import React, {Component} from 'react';

class Interfaces extends Component {
    render() {
        return (
            <div>
                <header className="header_area">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container box_1620">
                                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png"
                                                                                          alt=""></img></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav justify-content-end">
                                        <li className="nav-item active"><a className="nav-link"
                                                                           href="index.html">Home</a></li>
                                        <li className="nav-item"><a className="nav-link" href="about.html">About</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link"
                                                                    href="speaker.html">Speakers</a></li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                               role="button" aria-haspopup="true"
                                               aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="event-schedule.html">Schedule</a></li>
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="event-gallery.html">Gallery</a></li>
                                                <li className="nav-item"><a className="nav-link" href="price.html">Price
                                                    Table</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                               role="button" aria-haspopup="true"
                                               aria-expanded="false">Blog</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a className="nav-link" href="blog.html">Blog
                                                    Single</a></li>
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a>
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

                <section className="hero-banner">
                    <div className="container text-center">
                        <span className="hero-banner-icon"><i className="flaticon-sing"></i></span>
                        <p>20 - 22 January, 2019, Buffelo City</p>
                        <h1>UX CONFERENCE 2019</h1>
                        <a className="button button-header" href="#">Buy Ticket</a>
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
                            <h2 className="primary-text">Why Join Ummet</h2>
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


                <section className="speaker-bg section-padding">
                    <div className="container">
                        <div className="section-intro section-intro-white text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Meet The Speakers</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-1.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Jhon Leonar</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-2.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Donald Markin</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-3.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Donald Markin</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 mb-50px d-none d-lg-block"></div>

                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-1.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Donald Markin</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-2.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Donald Markin</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    <img className="card-img rounded-0" src="img/home/speaker-3.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <h4>Jhon Leonar</h4>
                                        <p>UX/UI Designer Microsoft</p>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-margin mb-5 pb-5">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Conference Schedule</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="scheduleTab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item text-center">
                                            <a data-toggle="tab" href="#day1">
                                                <h4>Day 1</h4>
                                                <p>23 jan, 2019</p>
                                            </a>
                                        </li>
                                        <li className="nav-item text-center">
                                            <a className="active" data-toggle="tab" href="#day2">
                                                <h4>Day 2</h4>
                                                <p>23 jan, 2019</p>
                                            </a>
                                        </li>
                                        <li className="nav-item text-center">
                                            <a data-toggle="tab" href="#day3">
                                                <h4>Day 2</h4>
                                                <p>23 jan, 2019</p>
                                            </a>
                                        </li>
                                        <li className="nav-item text-center">
                                            <a data-toggle="tab" href="#day4">
                                                <h4>Day 2</h4>
                                                <p>23 jan, 2019</p>
                                            </a>
                                        </li>
                                    </ul>


                                    <div className="tab-content">
                                        <div id="day1" className="tab-pane">

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial1.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial2.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div id="day2" className="tab-pane active">

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial3.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial1.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial2.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div id="day3" className="tab-pane">
                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial3.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial1.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial2.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="day4" className="tab-pane">
                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial3.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial1.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial2.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-card">
                                                <div className="row no-gutters">
                                                    <div className="col-md-3">
                                                        <div className="card-identity">
                                                            <img src="img/testimonial/testimonial3.png" alt=""></img>
                                                            <h3>Adam Jamsmith</h3>
                                                            <p>UX/UI Designer</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="schedule-content">
                                                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                                                            <a className="schedule-title" href="#">
                                                                <h3>Previous Year achivement</h3>
                                                            </a>
                                                            <p>And wherein Beginning of you cattle fly had was deep
                                                                wherein darkness behold male called evening gathering
                                                                moving bring fifth days he lights dry cattle you open
                                                                seas midst let and in wherein beginning </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-padding bg-gray">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Choose Your Ticket</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="text-center card-priceTable">
                                    <div className="priceTable-header">
                                        <h3>Normal</h3>
                                        <p>Attend only first day</p>
                                        <h1 className="priceTable-price"><span>$</span> 45.00</h1>
                                    </div>
                                    <ul className="priceTable-list">
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Unlimited
                                            Entrance
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Comfortable
                                            Seat
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Paid
                                            Certificate
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> Day One
                                            Workshop
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> One
                                            Certificate
                                        </li>
                                    </ul>
                                    <div className="priceTable-footer">
                                        <a className="button" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="text-center card-priceTable">
                                    <div className="priceTable-header">
                                        <h3>Advance</h3>
                                        <p>Attend only first day</p>
                                        <h1 className="priceTable-price"><span>$</span> 50.00</h1>
                                    </div>
                                    <ul className="priceTable-list">
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Unlimited
                                            Entrance
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Comfortable
                                            Seat
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Paid
                                            Certificate
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> Day One
                                            Workshop
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> One
                                            Certificate
                                        </li>
                                    </ul>
                                    <div className="priceTable-footer">
                                        <a className="button" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="text-center card-priceTable">
                                    <div className="priceTable-header">
                                        <h3>Ultimate</h3>
                                        <p>Attend only first day</p>
                                        <h1 className="priceTable-price"><span>$</span> 60.00</h1>
                                    </div>
                                    <ul className="priceTable-list">
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Unlimited
                                            Entrance
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Comfortable
                                            Seat
                                        </li>
                                        <li>
                                            <span className="position"><i className="ti-check"></i></span> Paid
                                            Certificate
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> Day One
                                            Workshop
                                        </li>
                                        <li>
                                            <span className="negative"><i className="ti-close"></i></span> One
                                            Certificate
                                        </li>
                                    </ul>
                                    <div className="priceTable-footer">
                                        <a className="button" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-80px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Event Plan Sponsors</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="sponsor-wrapper mb-5 pb-4">
                            <h3 className="sponsor-title mb-5">Gold Sponsor</h3>
                            <div className="row">
                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor1.png" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor2.png" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor3.png" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sponsor-wrapper sponsor-wrapper--small">
                            <h3 className="sponsor-title mb-5">Silver Sponsor</h3>
                            <div className="row">
                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor-sm-1.png" alt="">
                                        </img>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor-sm-2.png" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="sponsor-single">
                                        <img className="img-fluid" src="img/home/sponsor-sm-3.png" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-padding gallery-area gallery-bg">
                    <div className="container">
                        <div className="section-intro section-intro-white text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Event Plan Sponsors</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g1.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g1.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g2.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g2.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g3.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g3.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g4.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g4.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g5.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g5.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <a href="img/gallery/g6.png" className="img-gal">
                                    <div className="single-imgs relative">
                                        <img className="card-img rounded-0" src="img/gallery/g6.png" alt=""></img>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <div className="overlay-icon">
                                                    <i className="ti-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-margin">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Why Join Ummet</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="owl-theme owl-carousel blogCarousel pb-xl-1">
                            <div className="card-blog">
                                <img className="card-img" src="img/blog/blog1.png" alt=""></img>
                                <div className="blog-body">
                                    <a href="#">
                                    </a>
                                    <ul className="blog-info">
                                        <li><a href="#"><i className="ti-comments-smiley"></i> 03 Feb, 2019</a></li>
                                        <li><a href="#"><i className="ti-time"></i> No Comment</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-blog">
                                <img className="card-img" src="img/blog/blog2.png" alt=""></img>
                                <div className="blog-body">
                                    <a href="#">
                                    </a>
                                    <ul className="blog-info">
                                        <li><a href="#"><i className="ti-comments-smiley"></i> 03 Feb, 2019</a></li>
                                        <li><a href="#"><i className="ti-time"></i> No Comment</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-blog">
                                <img className="card-img" src="img/blog/blog1.png" alt=""></img>
                                <div className="blog-body">
                                    <a href="#">
                                    </a>
                                    <ul className="blog-info">
                                        <li><a href="#"><i className="ti-comments-smiley"></i> 03 Feb, 2019</a></li>
                                        <li><a href="#"><i className="ti-time"></i> No Comment</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-blog">
                                <img className="card-img" src="img/blog/blog2.png" alt=""></img>
                                <div className="blog-body">
                                    <a href="#">
                                    </a>
                                    <ul className="blog-info">
                                        <li><a href="#"><i className="ti-comments-smiley"></i> 03 Feb, 2019</a></li>
                                        <li><a href="#"><i className="ti-time"></i> No Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>About Umeet</h6>
                                    <p>
                                        The world has become so fast paced that people don’t want to stand by reading a
                                        page of information to be they would much rather look at a presentation and
                                        understand the message. It has come to a point where images and videos are used
                                        more to
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>Navigation Links</h6>
                                    <div className="row">
                                        <div className="col">
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">Feature</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">Portfolio</a></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul>
                                                <li><a href="#">Team</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>Newsletter</h6>
                                    <p>
                                        For business professionals caught between high OEM price and mediocre print and
                                        graphic output.
                                    </p>
                                    <div id="mc_embed_signup">
                                        <form target="_blank"
                                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                              method="get" className="subscription relative">
                                            <div className="input-group d-flex flex-row">
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  col-md-6 col-sm-6">
                                <div className="single-footer-widget mail-chimp">
                                    <h6 className="mb-20">InstaFeed</h6>
                                    <ul className="instafeed d-flex flex-wrap">
                                        <li><img src="img/instagram/i1.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i2.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i3.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i4.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i5.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i6.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i7.jpg" alt=""></img></li>
                                        <li><img src="img/instagram/i8.jpg" alt=""></img></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="fa fa-heart"
                                                                                        aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                                <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                < /div>
                    )
                    ;
                    }
                    }

                    export default Interfaces;
