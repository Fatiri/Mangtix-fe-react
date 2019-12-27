import React from 'react';
import {connect} from "react-redux";
import {fetchDataTicket} from "../../service/TicketService";
import {fetchcategorysucces, fetchticketcodesuccess, fetchticketsuccess} from "../../TicketAction";
import {fetcheventdetailsuccess} from "../../../events/EventAction";

class TicketListAdmin extends React.Component{
    render() {
        return(
            <div>
                <table>
                    <thead>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </thead>
                    {this.props.ticket.map((element, index)=>{
                        return <tbody>
                        <td>{element.id}</td>
                        <td>{element.category.categoryName}</td>
                        <td>{element.quantity}</td>
                        <td><button>Detail</button></td>
                        </tbody>
                    })}
                </table>
            </div>
        )
    }
    dataTicket=async ()=>{
        const data = await fetchDataTicket();
        if (!(data===undefined)){
            let action = {...fetchticketsuccess, payload:data}
            // let category={...fetchcategorysucces, payload:data.category}
            // let eventDetail = {...fetcheventdetailsuccess, payload:data.eventDetail}
            // let ticketCode = {...fetchticketcodesuccess, payload:data.ticketCode}
            this.props.dispatch(action)
            // this.props.dispatch(category)
            // this.props.dispatch(eventDetail)
            // this.props.dispatch(ticketCode)
        }
    }
    componentDidMount() {
        this.dataTicket()
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketListAdmin)
