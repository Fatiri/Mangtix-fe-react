import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class TicketDetail extends React.Component {
    render() {
        function goBack() {
            window.history.back()
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h5 className="card-title">
                                <button className="btn btn-primary" onClick={goBack}><i
                                    className="fas fa-arrow-alt-circle-left"></i></button>
                            </h5>
                            <div className="row">
                            <h3 className="card-ticket">Detail Ticket</h3>
                                <Link to={"/ticket-form"} class="btn btn-outline-primary btn-sm" role="button" aria-pressed="true" style={{marginLeft:400}}>Update Ticket
                                </Link>
                            </div>
                        </div>

                        <div className="card-body">
                            <label className="col-sm-4 col-form-label">Ticket Id : {this.props.ticketById.id}</label>
                            <label className="col-sm-4 col-form-label">Category  : {this.props.category.categoryName}</label>
                            <label className="col-sm-4 col-form-label">Event Date: {this.props.eventDetail.eventDate}</label>
                            <table className="table table-sm">
                                <thead>
                                <th scope="col">Ticket Code</th>
                                <th scope="col">Status Ticket Out</th>
                                <th scope="col">Status Available</th>
                                <th scope="col">Status Arrived</th>
                                </thead>
                                {this.props.ticketCode.map((element, index) => {
                                    return <tbody>
                                    <td>{element.ticketCode}</td>
                                    <td>{element.statusTicketOut}</td>
                                    <td>{this.handleAvailable(element.available)}</td>
                                    <td>{this.handleArrived(element.arrived)}</td>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    handleAvailable = (data) => {
        if (data) {
            return "Available"
        } else {
            return "No Available"
        }
    }
    handleArrived = (data) => {
        if (data) {
            return "Arrived"
        } else {
            return "No Arrived"
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketDetail)
