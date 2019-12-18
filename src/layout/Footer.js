import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
            <footer className="footer-area">
            <div className="container">
            <div className="row">
            <div className="col-lg-6  col-md-6 col-sm-6">
            <div className="single-footer-widget">
            <h6>About MangTix</h6>
        <p>
        Mangtix is an online ticket provider for big events in Indonesia
        </p>
        </div>
        </div>

            <div className="col-lg-3  col-md-3 col-sm-6">
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
        <li><img src="img/instagram/i9.jpg" alt=""></img></li>
        <li><img src="img/instagram/i10.jpg" alt=""></img></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
            <div className="row align-items-center">
            <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
        </div>
        </div>
        </div>
        </footer>
            < /div>
        );
    }
}

export default Footer;