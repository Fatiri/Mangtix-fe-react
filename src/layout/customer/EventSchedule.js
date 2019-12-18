import React, {Component} from 'react';
import {Link} from "react-router-dom";

class EventSchedule extends Component {
    render() {
        return (
            < div >
            <section className="hero-banner hero-banner-sm">
            <div className="container text-center">
            <h2>Event Schedule</h2>
        <Link className="button button-header" to="/ticket">Get Ticket</Link>
        </div>
        </section>

        <section className="section-margin--large mb-5 pb-5">
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
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
        < /div>
    )
        ;
    }
}

export default EventSchedule;