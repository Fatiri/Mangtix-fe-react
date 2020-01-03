import React, {Component} from 'react';
import Cart from "../../cart/component/Cart";

class BookingForm extends React.Component {

    render() {

        return (
            <div>
                <section className="hero-banner hero-banner-sm">
                </section>

                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <h2 className="primary-text">Booking</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>
                        <h3>Please choose a ticket</h3>
                            <div className="cart_info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="cart_info_columns clearfix">
                                                <div className="cart_info_col cart_info_col_product">Ticket</div>
                                                <div className="cart_info_col cart_info_col_event">Event</div>
                                                <div className="cart_info_col cart_info_col_price">Price</div>
                                                <div className="cart_info_col cart_info_col_quantity">Quantity</div>
                                                <div className="cart_info_col cart_info_col_total">Sub Total</div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="row cart_items_row">
                                            <div className="col">

                                                <div
                                                    className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                                    <div><img src="img/clients-logo/VVIP.png" alt=""></img></div>
                                                     <div
                                                                        className="cart_item_product">{}</div>



                                                    <div className="cart_item_price">
                                                        <span>Rp. </span>
                                                    </div>

                                                    <div className="product_quantity clearfix">
                                                        <span>Qty</span>
                                                        <input id="quantity_input" type="text" pattern="[0-9]*"
                                                               value=""></input>
                                                        <div className="quantity_buttons">
                                                            <div id="quantity_inc_button"
                                                                 className="quantity_inc quantity_control">
                                                                <i
                                                                    className="fa fa-chevron-up" aria-hidden="true"></i>

                                                            </div>
                                                            <div id="quantity_dec_button"
                                                                 className="quantity_dec quantity_control">
                                                                <i
                                                                    className="fa fa-chevron-down"
                                                                    aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="cart_item_total">
                                                        <span>Rp. </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row row_extra">
                                            <div className="col-lg-4">

                                                <div className="coupon">
                                                    <div className="section_title">Coupon code</div>
                                                    <div className="section_subtitle">Enter your coupon code</div>
                                                    <div className="coupon_form_container">
                                                        <form action="#" id="coupon_form" className="coupon_form">
                                                            <input type="text" className="coupon_input"
                                                                   required="required"></input>
                                                            <button className="button coupon_button"><span>Apply</span>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 offset-lg-2">
                                                <div className="cart_total">
                                                    <div className="section_title">Booking Total</div>
                                                    <div className="section_subtitle">Final info</div>
                                                    <div className="cart_total_container">
                                                        <ul>
                                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                                <div className="cart_total_title">Subtotal</div>
                                                                <div className="cart_total_value ml-auto">Rp. 790.000
                                                                </div>
                                                            </li>
                                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                                <div className="cart_total_title">Shipping</div>
                                                                <div className="cart_total_value ml-auto">Free</div>
                                                            </li>
                                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                                <div className="cart_total_title">Total</div>
                                                                <div className="cart_total_value ml-auto">Rp. 790.000
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="button checkout_button"><a href="#">Proceed to
                                                        checkout</a>
                                                    </div>
                                                </div>
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

                                    export default BookingForm;
