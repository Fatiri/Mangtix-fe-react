import React, {Component} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            < div >
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
            <li className="nav-item"><a className="nav-link" href="">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="">About</a></li>
        <li className="nav-item"><Link className="nav-link" to="/event">Events</Link></li>
        <li className="nav-item active"><a className="nav-link" href="">Schedule</a></li>
        </ul>
        <ul className="nav-right text-center text-lg-right py-4 py-lg-0">
            <li><Link className="nav-link" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
        </header>

        <section class="hero-banner hero-banner-sm">
            </section>

            <section className="section-padding--small sponsor-bg">
            <div className="container">
            <div className="section-intro text-center pb-98px">
            <p className="section-intro__title">Join the event</p>
        <h2 className="primary-text">Shopping Cart</h2>
            <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div className="cart_info">
            <div className="container">
            <div className="row">
            <div className="col">
            <div className="cart_info_columns clearfix">
            <div className="cart_info_col cart_info_col_product">Ticket</div>
            <div className="cart_info_col cart_info_col_event">Event</div>
            <div className="cart_info_col cart_info_col_price">Price</div>
            <div className="cart_info_col cart_info_col_quantity">Quantity</div>
            <div className="cart_info_col cart_info_col_total">Total</div>
            </div>
            </div>
            </div>
            <div className="row cart_items_row">
            <div className="col">

            <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

            <div><img src="img/clients-logo/VVIP.png" alt=""></img></div>
            <div className="cart_item_product">Djarum Merah</div>


        <div className="cart_item_price">
            <span>Rp. </span> 790.000
            </div>

            <div className="product_quantity clearfix">
            <span>Qty</span>
            <input id="quantity_input" type="text" pattern="[0-9]*" value="1"></input>
            <div className="quantity_buttons">
            <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
        <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
        </div>
        </div>

        <div className="cart_item_total">
            <span>Rp. </span> 790.000
            </div>
        </div>

        </div>
        </div>
        <div className="row row_cart_buttons">
            <div className="col">
            <div className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
            <div className="button continue_shopping_button"><a href="#">Continue Booking</a></div>
        <div className="cart_buttons_right ml-lg-auto">
            <div className="button clear_cart_button"><a href="#">Clear cart</a></div>
        <div className="button update_cart_button"><a href="#">Update cart</a></div>
        </div>
        </div>
        </div>
        </div>
        <div className="row row_extra">
            <div className="col-lg-4">


            <div className="delivery">
            <div className="section_title">Shipping method</div>
        <div className="section_subtitle">Select the one you want</div>
        <div className="delivery_options">
            <label className="delivery_option clearfix">Next day delivery
        <input type="radio" name="radio"></input>
            <span className="checkmark"></span>
            <span className="delivery_price">Rp. 49.000</span>
        </label>
        <label className="delivery_option clearfix">Standard delivery
        <input type="radio" name="radio"></input>
            <span className="checkmark"></span>
            <span className="delivery_price">Rp. 199.000</span>
        </label>
        <label className="delivery_option clearfix">Personal pickup
        <input type="radio" checked="checked" name="radio"></input>
            <span className="checkmark"></span>
            <span className="delivery_price">Free</span>
            </label>
            </div>
            </div>


            <div className="coupon">
            <div className="section_title">Coupon code</div>
        <div className="section_subtitle">Enter your coupon code</div>
        <div className="coupon_form_container">
            <form action="#" id="coupon_form" className="coupon_form">
            <input type="text" className="coupon_input" required="required"></input>
            <button className="button coupon_button"><span>Apply</span></button>
        </form>
        </div>
        </div>
        </div>

        <div className="col-lg-6 offset-lg-2">
            <div className="cart_total">
            <div className="section_title">Cart total</div>
        <div className="section_subtitle">Final info</div>
        <div className="cart_total_container">
            <ul>
            <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Subtotal</div>
            <div className="cart_total_value ml-auto">Rp. 790.000</div>
        </li>
        <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Shipping</div>
            <div className="cart_total_value ml-auto">Free</div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Total</div>
            <div className="cart_total_value ml-auto">Rp. 790.000</div>
        </li>
        </ul>
        </div>
        <div className="button checkout_button"><a href="#">Proceed to checkout</a></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        < /div>
    );
    }
}

export default Cart;
