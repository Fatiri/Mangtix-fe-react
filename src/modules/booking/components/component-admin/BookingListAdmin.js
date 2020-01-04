import React from "react";
import {connect} from "react-redux";
import {fetchDataBookingByUser, fetchDataUserAll} from "../../service/BookingService";
import {fetchbookingsuccess, fetchusersuccess} from "../../BookingAction";

class BookingListAdmin extends React.Component {
    render() {
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className="card-header card-header-success">
                                <h3 className="card-category">List User</h3>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th><center>Action</center></th>
                                </thead>
                                {this.props.user.map((element, index) => {
                                    return <tbody>
                                    <td>{element.userName}</td>
                                    <td>{element.fullName}</td>
                                    <td>
                                        <div className="card">
                                            <button onClick={() => {
                                                this.dataBookingByUser(element.id).then(r => r)
                                            }} className="btn btn-primary btn-sm" data-toggle="modal"
                                                    data-target=".bd-example-modal-xl">
                                                List Booking
                                            </button>

                                        </div>
                                    </td>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    </div>
                </div>

                <br/>
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
                                <thead className="thead-dark">
                                <th>Id Booking</th>
                                <th>Booking Date</th>
                                <th>Username</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Category Ticket</th>
                                <th>Event Date</th>
                                </thead>
                                {this.props.booking.map((element) => {
                                    return <>
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
                                    </>
                                })}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    dataBookingByUser = async (event) => {
        const data = await fetchDataBookingByUser(event);
        console.log(data)
        let action = {...fetchbookingsuccess, booking: data, bookingDetail: data}
        await this.handleGetBooking(action)
    }
    handleGetBooking = async (action) => {
        console.log(action)
        console.log("fcjhk", this.props.booking)
        this.props.dispatch(action)
    }
    dataUserBooking = async () => {
        const data = await fetchDataUserAll();
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetchusersuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }

    componentDidMount() {
        this.dataUserBooking()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(BookingListAdmin)
