import React, {Component} from 'react';
import '../../../App.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteDataCartsById, fetchDataCartsByUser} from "../service/CartService";
import decodeJwtToken from "../../../authentication/AutheticationDecodeJwt";
import {fetchcart, fetcheventsuccess} from "../../../reducerCustomer/ActionReducerCustomer";
import {fetchDataEvent} from "../../events/service/EventService";

class Cart extends Component {
    render() {
        let total = 0;
        this.props.cart.map((element, index) => {
            return total = total + element.subTotal;
        })
        return (
            <div>

                <section class="hero-banner hero-banner-sm">
                </section>

                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Shopping Cart</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>
                        {this.props.cart.length === 0 ? <h3>Please choose a ticket</h3> :
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
                                    {this.props.cart.map((element, index) => {
                                        return <>
                                            <div className="row cart_items_row">
                                                <div className="col">

                                                    <div
                                                        className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                                        <div><img src="img/clients-logo/VVIP.png" alt=""></img></div>
                                                        {this.props.events.map((element1, index1) => {
                                                            return <>
                                                                {element1.eventDetailList.map((eventDetail) => {
                                                                        console.log(element.ticket.eventDetail.id, "  ke1")
                                                                        console.log(eventDetail.id, "  ke2")
                                                                        if (eventDetail.id === element.ticket.eventDetail.id) {
                                                                            console.log(element1.eventName)
                                                                            return <div
                                                                                className="cart_item_product">{element1.eventName}</div>
                                                                        }
                                                                    })
                                                                }
                                                            </>
                                                        })}


                                                        <div className="cart_item_price">
                                                            <span>Rp. </span> {element.ticket.price}
                                                        </div>

                                                        <div className="product_quantity clearfix">
                                                            <span>Qty</span>
                                                            <input id="quantity_input" type="text" pattern="[0-9]*"
                                                                   value={element.quantity}></input>
                                                            <div className="quantity_buttons">
                                                                <div id="quantity_inc_button"
                                                                     className="quantity_inc quantity_control"><i
                                                                    className="fa fa-chevron-up" aria-hidden="true"></i>
                                                                </div>
                                                                <div id="quantity_dec_button"
                                                                     className="quantity_dec quantity_control"><i
                                                                    className="fa fa-chevron-down"
                                                                    aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="cart_item_total">
                                                            <span>Rp. </span> {element.subTotal}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="row row_cart_buttons">
                                                <div className="col">
                                                    <div
                                                        className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                                        <div className="button continue_shopping_button"><Link to="#">Continue
                                                            Booking</Link></div>
                                                        <div className="cart_buttons_right ml-lg-auto">
                                                            <div onClick={() => {
                                                                this.deleteACart(element.id)
                                                            }} className="button clear_cart_button"><Link to="#">Clear
                                                                cart</Link>
                                                            </div>
                                                            <div className="button update_cart_button"><Link to="#">Update
                                                                cart</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    })}
                                    <div className="row row_extra">

                                        <div className="col-lg-12">
                                            <div className="cart_total">
                                                <div className="section_title">Cart total</div>
                                                <div className="section_subtitle">Final info</div>
                                                <div className="cart_total_container">
                                                    <ul>
                                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                                            <div className="cart_total_title">Total</div>
                                                            <div className="cart_total_value ml-auto">Rp. {total}</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="button checkout_button"><Link to="#">Proceed to
                                                    checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        );
    }

    deleteACart = async (cartId) => {
        await deleteDataCartsById(cartId);
        this.dataCart()
    }
    dataCart = async () => {
        const dataToken = decodeJwtToken();
        if (!(dataToken === null)) {
            const idUser = dataToken.jti;
            const data = await fetchDataCartsByUser(idUser)
            console.log(data)
            let action = {...fetchcart, cart: data}
            this.props.dispatch(action)
        }
    }
    dataEvent = async () => {
        const dataEvent = await fetchDataEvent();
        let action = {...fetcheventsuccess, payload: dataEvent}
        console.log(action)
        this.props.dispatch(action)
    }

    componentDidMount() {
        this.dataCart()
        this.dataEvent()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}

export default connect(mapStateToProps)(Cart);
