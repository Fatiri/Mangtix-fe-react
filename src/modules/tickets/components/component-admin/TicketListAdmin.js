import React from 'react';
import {connect} from "react-redux";
import {fetchDataTicket, fetchDataTicketById} from "../../service/TicketService";
import {fetchticketsuccess, handleChangeData, handleChangeDataTicket} from "../../TicketAction";
import {Link} from "react-router-dom";
import {fetchDataEventId} from "../../../events/service/EventService";
class TicketListAdmin extends React.Component{
    render() {
        return(
            <div className="col-xl-auto flex-column">
                <div className="card">
                    <div className="card-header card-header-success">
                    <span className="card-title ">
                        <Link to={"/ticket-form"} class="btn btn-outline-primary btn-sm " role="button" aria-pressed="true">Add Ticket
                            </Link>
                    </span>
                        <h3 className="card-category">Ticket List</h3>
                    </div>
                    <div className="card-body">
                <table className="table table-hover">
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
                        <td><Link to={"/ticket-detail"} onClick={() => {
                            this.handleDetail(element.id)
                        }}>Detail</Link></td>
                        </tbody>
                    })}
                </table>
                    </div>
                </div>
            </div>
        )
    }
    handleDetail = async (id) => {
        console.log(id + "ini id")
        const data = await fetchDataTicketById(id)
        console.log(data.eventDetail+"iniiiiiiiiiiiii")
        this.props.dispatch({...handleChangeDataTicket, ticketById: data, category: data.category,
            eventDetail: data.eventDetail,ticketCode: data.ticketCodes})
        console.log(this.props.eventDetail+"ini ticket detail")
    }

    dataTicket=async ()=>{
        const data = await fetchDataTicket();
        if (!(data===undefined)){
            let action = {...fetchticketsuccess, payload:data}
            this.props.dispatch(action)
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
