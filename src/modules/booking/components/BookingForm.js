import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchDataEvent} from "../../events/service/EventService";
import {
    clearbookingform, fetchbookingsuccess,
    fetcheventsuccess,
    fetchticketsuccess,
    handlepayment, Total
} from "../../../reducerCustomer/ActionReducerCustomer";
import {fetchDataTicket} from "../../tickets/service/TicketService";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {saveDataBooking} from "../service/BookingService";
import {deleteCart} from "../../cart/service/CartService";

class BookingForm extends React.Component {

    render() {
        let total = 0;
        let subTotal=0;
        this.props.bookingForm.bookingDetailList.map((element)=>{
            this.props.ticket.map((ticket)=>{
                if (ticket.id===element.ticketIdTransient){
                    subTotal= ticket.price * element.quantity
                    return total = total + subTotal
                }
            })
        })

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
                                {this.props.bookingForm.bookingDetailList.map((element, index) => {
                                    return <>
                                        <div className="row cart_items_row">
                                            <div className="col">

                                                <div
                                                    className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                                    {this.props.ticket.map((ticket)=>{
                                                        if (ticket.id===element.ticketIdTransient) {
                                                            return <>
                                                    <div>{ticket.category.categoryName==="VVIP"?<img src="img/clients-logo/VVIP.png" alt=""></img>:
                                                        ticket.category.categoryName==="VIP"?<img src="img/clients-logo/VIP.png" alt=""></img>:
                                                            ticket.category.categoryName==="PRESALE1"?<img src="img/clients-logo/presale1.jpg" alt=""></img>:
                                                                ticket.category.categoryName==="PRESALE2"?<img src="img/clients-logo/presale2.jpg" alt=""></img>:<img src="img/clients-logo/presale2.jpg" alt=""></img>}</div>

                                                            {
                                                                this.props.events.map((element1, index1) => {
                                                                    return <>
                                                                        {element1.eventDetailList.map((eventDetail) => {
                                                                            console.log(ticket.eventDetail.id, "  ke1")
                                                                            console.log(eventDetail.id, "  ke2")
                                                                            if (eventDetail.id === ticket.eventDetail.id) {
                                                                                console.log(element1.eventName)
                                                                                return <div
                                                                                    className="cart_item_product">{element1.eventName}</div>
                                                                            }
                                                                        })
                                                                        }
                                                                    </>
                                                                })
                                                            }


                                                    <div className="cart_item_price">
                                                        <span>{new Intl.NumberFormat('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR'
                                                        }).format(ticket.price)}</span>
                                                    </div>

                                                    <div className="product_quantity clearfix">
                                                        <span>Qty</span>
                                                        <input disabled={true} id="quantity_input" type="text" pattern="[0-9]*"
                                                               value={element.quantity}></input>
                                                    </div>

                                                    <div className="cart_item_total">
                                                        <span>{new Intl.NumberFormat('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR'
                                                        }).format(subTotal)}</span>
                                                    </div>
                                                           </>
                                                        }
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                    </>
                                })}


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
                                                        <div className="cart_total_title">Total</div>
                                                        <div className="cart_total_value ml-auto">{new Intl.NumberFormat('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR'
                                                        }).format(total)}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row"><Link onClick={()=>{this.payment(this.props.bookingForm, total)}} to="/payment" className="button checkout_button">Proceed to
                                                Payment</Link>
                                                <Link onClick={this.cancelBooking} to="/cart" className="button checkout_button" >Cancel Booking</Link>
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
    payment=async (booking,total)=>{
        console.log(booking)
        let dataBooking=await saveDataBooking(booking)
        console.log(dataBooking)
        let actionBooking={...fetchbookingsuccess, booking:dataBooking}
        console.log(actionBooking)
        await this.props.dispatch(actionBooking)
        let action={...handlepayment, bookingIdTransient:dataBooking.id}
        console.log(action)
        await this.props.dispatch(action)
        await this.props.dispatch({...Total, total:total})
        this.props.cartById.map((cart)=>{
            return deleteCart(cart.id)
        })
    }
    dataEvent = async () => {
        const dataEvent = await fetchDataEvent();
        let action = {...fetcheventsuccess, payload: dataEvent}
        console.log(action)
        this.props.dispatch(action)
    }
    dataTicket = async ()=>{
        const dataTicket=await fetchDataTicket();
        let action = {...fetchticketsuccess, payload: dataTicket}
        this.props.dispatch(action)
    }
    cancelBooking=async ()=>{
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel Booking!'
        })
        await this.props.dispatch({...clearbookingform})
    }
    componentDidMount() {
        this.dataEvent()
        this.dataTicket()
    }
}


const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}

export default connect(mapStateToProps)(BookingForm);
