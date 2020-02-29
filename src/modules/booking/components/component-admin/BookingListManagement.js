import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDataEventByCompany} from "../../../events/service/EventService";
import decodeJwtToken from "../../../../authentication/AutheticationDecodeJwt";
import {
    bookingDetailManagement,
    eventDetailManagement,
    fetchBookingManagement,
    fetchEventManagement, pureBookingManagement,
    ticketManagement
} from "../../BookingAction";
import {fetchDataBookingAll, fetchDataBookingById} from "../../service/BookingService";
import {fetchDataListTicketByEventDetail} from "../../../tickets/service/TicketService";


class BookingListManagement extends Component {
    render() {
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className="card-header card-header-success">
                                <h3 className="card-category">List Customer</h3>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Action</th>
                                </thead>
                                {this.props.bookingManagement.map((element, index) => {

                                    return <tbody>
                                    <td>{element.user.userName}</td>
                                    <td>{element.user.password}</td>
                                    <td>
                                        <div className="card">
                                            <button className="btn btn-primary btn-sm" data-toggle="modal"
                                                    data-target=".bd-example-modal-xl">
                                                List Booking
                                            </button>

                                        </div>
                                    </td>
                                    <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog"
                                         aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl">

                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">List Booking</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <table className="table table-hover modal-body">
                                                    <thead>
                                                    <th>Id Booking</th>
                                                    <th>Booking Date</th>
                                                    <th>Username</th>
                                                    <th>Quantity</th>
                                                    <th>Subtotal</th>
                                                    <th>Category Ticket</th>
                                                    <th>Event Date</th>
                                                    </thead>

                                                    <tbody>
                                                    <td>{element.id}</td>
                                                    <td>{element.bookDate}</td>
                                                    <td>{element.user.userName}</td>
                                                    {element.bookingDetailList.map((bookingDetail) => {
                                                        return <>
                                                            <td>{bookingDetail.quantity}</td>
                                                            <td>{bookingDetail.subtotal}</td>
                                                            <td>{bookingDetail.ticket.category.categoryName}</td>
                                                            <td>{bookingDetail.ticket.eventDetail.eventDate}</td>
                                                        </>
                                                    })}
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchEventManagement();
        this.fetchBookingManagement();
    }

    fetchEventManagement = async () => {
        const token = decodeJwtToken();
        const companyId = token.aud;
        const dataEvent = await fetchDataEventByCompany(companyId);
        console.log(dataEvent+"iniiiiiiiiiiiii")
        this.props.dispatch({...fetchEventManagement, eventManagement: dataEvent})
        console.log(this.props.eventManagement)
        this.props.eventManagement.map(event => {
            {
                event.eventDetailList.map(eventDetail => {
                    this.props.dispatch({...eventDetailManagement, eventDetailIdManagement: eventDetail.id})
                })
            }
        })
        this.addTicketFromEventDetail();
    }

    addTicketFromEventDetail = async () => {
        const eventDetailId = this.props.eventDetailIdManagement;
        const dataTicket = await fetchDataListTicketByEventDetail(eventDetailId);
        this.props.dispatch({...ticketManagement, ticketManagement: dataTicket})
        this.compareDataBookingWithTicketId();
    }

    fetchBookingManagement = async () => {
        const dataBooking = await fetchDataBookingAll();
        this.props.dispatch({...fetchBookingManagement, bookingManagement: dataBooking})
        this.props.bookingManagement.map(dataBooking => {
            this.props.dispatch({...bookingDetailManagement, bookingDetailListManagement: dataBooking.bookingDetailList
            })
        })
    }

    compareDataBookingWithTicketId=async ()=>{
        this.props.bookingDetailListManagement.map((bookingDetail, index)=>{
            console.log(this.props.bookingDetailManagement+"iniiiiiii")
            this.props.ticketManagement.map( async ticket=>{
                if (bookingDetail.ticket.id===ticket.id){
                    const dataBooking = await fetchDataBookingById(bookingDetail.bookingIdTransient);
                    console.log(dataBooking.id+"iniii")
                    console.log(index);
                    this.props.dispatch({...pureBookingManagement, index:index, booking:dataBooking})
                    console.log(this.props.pureBookingListManagement.booking.map(data=>{
                        return console.log(data.data)
                    })+"ini loh")
                }
            })
        })
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)(BookingListManagement);