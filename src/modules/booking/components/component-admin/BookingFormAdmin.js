import React from "react";
import {connect} from "react-redux";
import {fetchDataBookingByUser, fetchDataUserAll} from "../../service/BookingService";
import {fetchbookingsuccess, fetchusersuccess} from "../../BookingAction";

class BookingFormAdmin extends React.Component{
    render() {
        return(
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                <table>
                    <thead>
                    <th>Username</th>
                    <th>Full Name</th>
                    <th>Action</th>
                    </thead>
                    {this.props.user.map((element, index)=>{
                        return <tbody>
                        <td>{element.userName}</td>
                        <td>{element.fullName}</td>
                        <td>
                            <button onClick={()=>{this.dataBookingByUser(element.id)}} className="btn btn-primary" type="button" data-toggle="collapse"
                                    data-target="#collapseExample" aria-expanded="false"
                                    aria-controls="collapseExample">
                                List Booking
                            </button></td>
                        </tbody>
                    })}
                </table>
                        <label>{this.props.booking.id}</label>
                    </div>
                </div>
            </div>
        )
    }

    dataBookingByUser = async (event) => {
        const data = await fetchDataBookingByUser(event);
        console.log(data)
            let action = {...fetchbookingsuccess, booking: data, bookingDetail:data.bookingDetailList}
            console.log(action)
            console.log("fcjhk",this.props.booking)
            this.props.dispatch(action)

    }
     dataUserBooking = async ()=>{
        const data = await fetchDataUserAll();
         console.log(data)
         if (!(data === undefined)) {
             let action = {...fetchusersuccess, payload:data}
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
export default connect(mapStateToProps)(BookingFormAdmin)
