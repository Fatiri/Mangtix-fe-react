import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {saveDataPayment} from "../service/PaymentService";
import {fetchDataBookingById} from "../../booking/service/BookingService";
import {fetchbookingsuccess} from "../../../reducerCustomer/ActionReducerCustomer";

class PaymentForm extends Component {
    render() {
        // let total=0;
        // this.props.booking.bookingDetailList.map((element)=>{
        //     return total=total+element.subtotal;
        // })
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
                                            {/*<div className="cart_total_value ml-auto">{new Intl.NumberFormat('id-ID', {*/}
                                            {/*    style: 'currency',*/}
                                            {/*    currency: 'IDR'*/}
                                            {/*}).format(total)}</div>*/}
                                        </li>
                                    </div>
                                </ul>
                                <div className="section_title">Payment Method</div>
                                <div className="section_subtitle">Select the one you want</div>
                                <div className="delivery_options">

                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/mandiri.png" alt="" className="btn-dark"></img>

                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/BRI.png" alt="" className="btn-dark"></img>


                                    <input type="radio" name="radio" style={{margin: 15}}></input>
                                    <img src="img/clients-logo/BNI.png" alt="" className="btn-dark"></img>
                                </div>
                                <br/>
                                <div className="button checkout_button"><button onClick={this.payment}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    payment=async ()=>{
        await saveDataPayment(this.props.paymentForm)
    }

    bookingById=async (id)=>{
        let data = await fetchDataBookingById(id)
        let action = {...fetchbookingsuccess, booking:data}
        this.props.dispatch(action)
    }
    componentDidMount() {
        this.bookingById(this.props.paymentForm.bookingIdTransient)
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(PaymentForm);
