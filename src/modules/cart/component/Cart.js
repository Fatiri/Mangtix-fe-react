import React, {Component} from 'react';
import '../../../App.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteDataCartsById, fetchDataCartsById, fetchDataCartsByUser, updateDataCart} from "../service/CartService";
import decodeJwtToken from "../../../authentication/AutheticationDecodeJwt";
import {
    addbookingdetail,
    fetchcart,
    fetchcartbyid,
    fetcheventsuccess, handlebooking,
    handlequantitybooking, handlequantityupdate, handletickettransientbooking
} from "../../../reducerCustomer/ActionReducerCustomer";
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
                                    <form>
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

                                                            <div><img src="img/clients-logo/VVIP.png" alt=""></img>
                                                            </div>
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
                                                                {new Intl.NumberFormat('id-ID', {
                                                                    style: 'currency',
                                                                    currency: 'IDR'
                                                                }).format(element.ticket.price)}
                                                            </div>

                                                            <div className="product_quantity">
                                                                <span>Qty</span>
                                                                <input className="form-control-sm" id="quantity_input"
                                                                       type="number" min={1} pattern="[1-4]*" max={4}
                                                                       value={element.quantity}
                                                                       onChange={(event) => {
                                                                           this.props.dispatch({
                                                                               ...handlequantityupdate,
                                                                               quantity: event.target.value,
                                                                               index: index
                                                                           })
                                                                       }}
                                                                >
                                                                </input>
                                                            </div>

                                                            <div className="cart_item_total">
                                                                {new Intl.NumberFormat('id-ID', {
                                                                    style: 'currency',
                                                                    currency: 'IDR'
                                                                }).format(element.subTotal)}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className="row row_cart_buttons">
                                                    <div className="col">
                                                        <div
                                                            className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                                            <div className="button continue_shopping_button"><Link onClick={()=>{this.bookingById(element.id, index)}}
                                                                to="/booking">Continue
                                                                Booking</Link></div>
                                                            <div className="cart_buttons_right ml-lg-auto">
                                                                <div className="button clear_cart_button"><Link
                                                                    onClick={() => {
                                                                        this.deleteACart(element.id)
                                                                    }} to="#">Clear cart</Link>
                                                                </div>
                                                                <div className="button update_cart_button"><Link onClick={()=>{this.updateCart(element, index)}} to="#">Update
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
                                                                <div
                                                                    className="cart_total_value ml-auto">{new Intl.NumberFormat('id-ID', {
                                                                    style: 'currency',
                                                                    currency: 'IDR'
                                                                }).format(total)}</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="button checkout_button"><Link onClick={()=>{this.bookingAll(this.props.cart)}} to="/booking">Proceed
                                                        to
                                                        checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        );
    }
    bookingById=async (cartId, index)=>{
        let data = await fetchDataCartsById(cartId);
        await this.props.dispatch({...addbookingdetail})
        let action = {...handlebooking, userIdTransient:data.user.id}
        await this.props.dispatch(action)
        let ticket = {...handletickettransientbooking, ticketIdTransient:data.ticket.id, index:index}
        await this.props.dispatch(ticket)
        let quantity = {...handlequantitybooking, quantity:data.quantity, index:index}
        await this.props.dispatch(quantity)
        console.log(this.props.bookingForm,"booking form")
    }
    bookingAll=async (carts)=>{
        carts.map((element,index)=>{
            this.props.dispatch({...addbookingdetail})
            let ticket = {...handletickettransientbooking, ticketIdTransient:element.ticket.id, index:index}
            this.props.dispatch(ticket)
            let quantity = {...handlequantitybooking, quantity:element.quantity, index:index}
            this.props.dispatch(quantity)
        })
        const dataToken = decodeJwtToken();
        if (!(dataToken === null)) {
            const idUser = dataToken.jti;
            console.log(idUser, "userId")
            let action = {...handlebooking, userIdTransient:idUser}
            await this.props.dispatch(action)
        }
    }

    updateCart = async (cartId) => {
        let action = {...fetchcartbyid, cartFormUpdate: cartId}
        await this.props.dispatch(action)
        console.log(this.props.cartFormUpdate.id+"iniiiiiiiiiiiiiiiiii")
        await updateDataCart(this.props.cartFormUpdate)
        await this.dataCart()
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
