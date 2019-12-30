import React from "react";
import {connect} from "react-redux";
import {saveDataBooking, fetchDataBookingByUser, fetchDataBookingById} from "../../../booking/service/BookingService";
import {fetchbookingsuccess, fetchpaymentsuccess, fetchusersuccess} from "../../PaymentAction";
import {fetchDataPayments, fetchDataUserAll} from "../../service/PaymentService";


class PaymentList extends React.Component {
    render() {
        return (
            <>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className="card-header card-header-success">
                                <h3 className="card-category">List Payment</h3>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <th>Id</th>
                                <th>Payment Date</th>
                                <th>Total Payment</th>
                                <th>Action</th>
                                </thead>
                                {this.props.payment.map((element, index) => {
                                    return <tbody>
                                    <td>{element.id}</td>
                                    <td>{element.paymentDate}</td>
                                    <td>{element.totalPayment}</td>
                                    <td>
                                        <div className="card">
                                            <button onClick={() => {
                                                this.dataBookingById(element.booking.id).then(r => r)
                                            }} className="btn btn-primary btn-sm" data-toggle="modal"
                                                    data-target=".bd-example-modal-xl">
                                                Detail Booking
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

                <div  tabIndex="-1" role="dialog" className="modal fade bd-example-modal-xl"
                     aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-xl modal-dialog ">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detail Booking</h5>
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
                                        <td>{this.props.booking.id}</td>
                                        <td>{this.props.booking.bookDate}</td>
                                        <td>{this.props.user.userName}</td>
                                        {this.props.bookingDetail.map((bookingDetail) => {
                                            // if (bookingDetail.paymentStatus===true){
                                                return <>
                                                    <td>{bookingDetail.quantity}</td>
                                                    <td>{bookingDetail.subtotal}</td>
                                                    <td>{bookingDetail.ticket.category.categoryName}</td>
                                                    <td>{bookingDetail.ticket.eventDetail.eventDate}</td>
                                                </>
                                            // }

                                        })}
                                        </tbody>


                            </table>
                        </div>
                    </div>
                </div>
                </>
        )
    }

    dataPayments=async ()=>{
        const data = await fetchDataPayments();
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetchpaymentsuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    dataBookingById = async (event) => {
        const data = await fetchDataBookingById(event);
        console.log(data)
        let action = {...fetchbookingsuccess, booking: data, bookingDetail:data.bookingDetailList, user:data.user}
        await this.handleGetBooking(action)
        console.log(action)
    }
    handleGetBooking = async (action) => {
        console.log(action)
        console.log("fcjhk", this.props.booking)
        this.props.dispatch(action)
    }
    // dataUserBooking = async () => {
    //     const data = await fetchDataUserAll();
    //     console.log(data)
    //     if (!(data === undefined)) {
    //         let action = {...fetchusersuccess, payload: data}
    //         console.log(action)
    //         this.props.dispatch(action)
    //     }
    // }

    componentDidMount() {
        this.dataPayments()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(PaymentList)
