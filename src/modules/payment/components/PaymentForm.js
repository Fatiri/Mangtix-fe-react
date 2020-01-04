import React, {Component} from 'react';

class PaymentForm extends Component {
    render() {
        return (
            <div>
                <section className="hero-banner hero-banner-sm">
                </section>

                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Payment</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="col-md-8 offset-2">
                            <div className="cart_total_container">
                                <ul>
                                    <div className="cart_total">
                                        <div className="section_title">Cart total</div>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_total_title">Total</div>
                                            <div className="cart_total_value ml-auto">Rp. 790.000</div>
                                        </li>
                                    </div>
                                </ul>
                                <div className="section_title">Payment Method</div>
                                <div className="section_subtitle">Select the one you want</div>
                                <div className="delivery_options">
                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/alfamart.png" alt="" className="btn-dark"></img>

                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/indomaret.png" alt="" className="btn-dark"></img>

                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/BRI.png" alt="" className="btn-dark"></img>

                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/BNI.png" alt="" className="btn-dark"></img>
                                </div>
                                <br/>
                                <div className="button checkout_button"><a href="#">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PaymentForm;