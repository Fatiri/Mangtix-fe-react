import React from "react";
import {connect} from "react-redux";
import {fetchDataBookingByUser, fetchDataUserAll, fetchDataUserId} from "../../service/BookingService";
import {fetchbookingsuccess, fetchuserbyid, fetchusersuccess} from "../../BookingAction";

class BookingListAdmin extends React.Component{
    render() {
        return(
            <>

            </>
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
    dataUserBooking = async (userId)=>{
        const data = await fetchDataUserId(userId);
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetchuserbyid, payload:data, companyUser:data.companyUser}
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
