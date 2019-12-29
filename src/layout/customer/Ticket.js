import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Ticket extends Component {
    render() {
        return (
            <div>

            <section class="hero-banner hero-banner-sm">
            <div class="container text-center">
            <h2>Pricing Plan</h2>
            </div>
            </section>

        <section class="section-padding--small sponsor-bg">
            <div class="container">
            <div class="section-intro text-center pb-80px">
            <p class="section-intro__title">Join the event</p>
        <h2 class="primary-text">Event Plan Sponsors</h2>
        <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="text-center card-priceTable">
            <div className="priceTable-header">
            <h3>Presale-1</h3>
            <p>Attend only first day</p>
        <h1 className="priceTable-price"><span>$</span> 45.00</h1>
        </div>
        <ul className="priceTable-list">
            <li>
            <span className="position"><i className="ti-check"></i></span> Unlimited Entrance
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Comfortable Seat
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Paid Certificate
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> Day One Workshop
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> One Certificate
        </li>
        </ul>
        <div className="priceTable-footer">
            <button type="button" className="button" data-toggle="modal" data-target="#modalAbandonedCart">Buy Now</button>

        <div className="modal fade right" id="modalAbandonedCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
            <div className="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
            <div className="modal-content">
            <div className="modal-header">
            <p className="heading">Product in the cart
        </p>

        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="white-text">&times;</span>
        </button>
        </div>

        <div className="modal-body">

            <div className="row">
            <div className="col-3">
            <p></p>
            <p className="text-center"><i className="fas fa-shopping-cart fa-4x"></i></p>
        </div>

        <div className="col-9">
            <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
        </div>
        </div>
        </div>

        <div className="modal-footer justify-content-center">
            <a type="button" className="btn btn-info">Go to cart</a>
        <a type="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">Cancel</a>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="text-center card-priceTable">
            <div className="priceTable-header">
            <h3>Presale-2</h3>
            <p>Attend only first day</p>
        <h1 className="priceTable-price"><span>$</span> 50.00</h1>
        </div>
        <ul className="priceTable-list">
            <li>
            <span className="position"><i className="ti-check"></i></span> Unlimited Entrance
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Comfortable Seat
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Paid Certificate
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> Day One Workshop
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> One Certificate
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
                                        <h3>VVIP</h3>
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
            </div>
        );
    }
}

export default Ticket;
