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
            <img className="d-block w-100" src="img/banner/hero-banner1.png" height="500px" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="img/banner/hero-banner.png" height="500px" alt="Third slide"></img>
            </div>
            </div>
            </div>

        <section className="section-padding--small sponsor-bg">
            <div className="container">
            <div className="section-intro text-center pb-98px">
        <h2 className="primary-text">Join The Event</h2>
        <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div className="owl-theme owl-carousel blogCarousel pb-xl-1">
            <div className="card-blog">
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
