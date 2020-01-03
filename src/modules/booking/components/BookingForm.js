import React, {Component} from 'react';
import Cart from "../../cart/component/Cart";

class BookingForm extends React.Component {

    render() {

        return (
            <div>
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
                            <div className="button checkout_button"><a href="#">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}

export default BookingForm;
