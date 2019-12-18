import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Events extends Component {
    render() {
        return (
            <div>
            <section className="hero-banner hero-banner-sm">
            <div className="container text-center">
            <h2>Events Schedule</h2>
            </div>
            </section>

            <section className="section-margin">
            <div className="container">
            <div className="section-intro text-center pb-98px">
        <h2 className="primary-text">Join The Event</h2>
        <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div class="owl-theme owl-carousel blogCarousel pb-xl-1">
            <div class="card-blog">
            <img className="card-img" src="img/blog/blog1.png" alt=""></img>
            <div className="blog-body">
            <Link className="nav-link" to="/event-schedule">
            <h3>Owls should be used to help abused children open <br className="d-none d-xl-block"/>
            up in therapy sessions, says charity boss</h3></Link>
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
            <h3>Owls should be used to help abused children open <br className="d-none d-xl-block"/>
            up in therapy sessions, says charity boss</h3>
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
            <h3>Owls should be used to help abused children open <br className="d-none d-xl-block"/>
            up in therapy sessions, says charity boss</h3>
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
            <h3>Owls should be used to help abused children open <br className="d-none d-xl-block"/>
            up in therapy sessions, says charity boss</h3>
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
        < /div>
    );
    }
}

export default Events;