import React from "react";
import {connect} from "react-redux";

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
                                    className="fa fa-arrow-alt-circle-left"></i></button>
                            </h5>
                            <h3 className="card-category">Detail Ticket</h3>
                        </div>
                        <div className="card-body">
                            <label className="col-sm-4 col-form-label">{this.props.ticketById.id}</label>
                            <label className="col-sm-4 col-form-label">{this.props.category.categoryName}</label>
                            <label className="col-sm-6 col-form-label">{this.props.eventDetail.eventDay}</label>
                            <table className="table table-sm">
                                <thead>
                                <th scope="col">Ticket Code</th>
                                <th scope="col">Status Ticket Out</th>
                                </thead>
                                {this.props.ticketCode.map((element, index) => {
                                    return <tbody>
                                    <td>{element.ticketCode}</td>
                                    <td>{element.statusTicketOut}</td>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketDetail)
