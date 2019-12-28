import React from 'react';
import {connect} from "react-redux";
import {
    clearstate, clearstatefree, clearstateonstate,
    fetchcategorysucces, fetcheventsuccess, fetchticketsavesuccess,
    handlecategoryid, handleeventdetailid, handleeventid, handlefreeupdate, handleonsaleupdate,
    handleprice,
    handlequantity
} from "../../TicketAction";
import {
    saveDataTicket,
    updateDataTicket
} from "../../service/TicketService";
import {fetchDataCategory} from "../../../categories/service/CategoryService";
import {fetchDataEventByCompany, fetchDataEventId} from "../../../events/service/EventService";
import {fetcheventdetailsuccess} from "../../../events/EventAction";

class TicketForm extends React.Component {
    render() {

        function goBack() {
            window.history.back()
        }

        return (
            <>
                {(this.props.ticket.length === 0 ?
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h5 className="card-title">
                                            <button className="btn btn-primary" onClick={goBack}><i
                                                className="fa fa-arrow-alt-circle-left"></i></button>
                                        </h5>
                                        <p className="card-category">Add Ticket</p>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-2 col-form-label">Event</label>
                                                    <select onChange={this.handleInputIdEvent}
                                                            className="form-control" required>
                                                        <option required>Choose Event</option>
                                                        {this.props.event.map(element => {
                                                            return <option value={element.id} required>
                                                                {element.eventName}
                                                            </option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-2 col-form-label">EventDetail</label>
                                                    <select className="form-control"
                                                            value={this.props.ticketForm.eventDetailIdTransient}
                                                            onChange={(event) => {
                                                                this.props.dispatch(
                                                                    {
                                                                        ...handleeventdetailid,
                                                                        eventDetailIdTransient: event.target.value
                                                                    })
                                                            }} required>
                                                        <option required>Choose Event Detail</option>
                                                        {this.props.eventDetail.map((element, index) => {
                                                            return <option value={element.id} required>
                                                                {element.eventDay}
                                                            </option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-2 col-form-label">Category</label>
                                                    <select className="form-control"
                                                            value={this.props.ticketForm.categoryIdTransient}
                                                            onChange={(event) => {
                                                                this.props.dispatch(
                                                                    {
                                                                        ...handlecategoryid,
                                                                        categoryIdTransient: event.target.value
                                                                    })
                                                            }} required>
                                                        <option>Choose Category</option>
                                                        {this.props.categories.map((element, index) => {
                                                            return <option value={element.id} required>
                                                                {element.categoryName}
                                                            </option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-6 col-form-label">Price</label>
                                                    <input className="form-control" type="number" min={1}
                                                           value={this.props.ticketForm.price} onChange={(event) => {
                                                        this.props.dispatch(
                                                            {...handleprice, price: event.target.value})
                                                    }} required/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-6 col-form-label">Quantity</label>
                                                    <input className="form-control" type="number"  min={1}
                                                           value={this.props.ticketForm.quantity}
                                                           onChange={(event) => {
                                                               this.props.dispatch(
                                                                   {...handlequantity, quantity: event.target.value})
                                                           }} required/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="col-sm-6 col-form-label"/>
                                                    <button type="submit" className="form-control btn btn-primary">Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h5 className="card-title">
                                        <button className="btn btn-primary" onClick={goBack}><i
                                            className="fa fa-arrow-alt-circle-left"></i></button>
                                    </h5>
                                    <p className="card-category">Update Ticket</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleUpdate}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-6 col-form-label">Quantity Status OnSale</label>
                                    <input className="form-control" type="number"
                                           value={this.props.ticket.onSaleTransient} onChange={(event) => {
                                        this.props.dispatch(
                                            {...handleonsaleupdate, onSaleTransient: event.target.value})
                                    }} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-sm-6 col-form-label">Quantity Status Free</label>
                                    <input className="form-control" type="number"
                                           value={this.props.ticket.freeTransient} onChange={(event) => {
                                        this.props.dispatch(
                                            {...handlefreeupdate, freeTransient: event.target.value})
                                    }} required/>
                                </div>
                            </div>
                            <button type="submit" className="form-control btn btn-primary">Update
                            </button>

                            <br/>


                                <label className="col-sm-6 col-form-label">{this.props.ticket.id}</label>
                                <label className="col-sm-6 col-form-label">{this.props.category.categoryName}</label>
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
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>

                )}
            </>
        )
    }

    handleUpdate = async (event) => {
        event.preventDefault()
        if (this.props.ticket.onSaleTransient + this.props.ticket.freeTransient > this.props.ticketCode.length) {
            alert("status OnSale and status Free exceeds quantity")
            return;
        }
        this.props.ticket.categoryIdTransient = this.props.category.id;
        this.props.ticket.eventDetailIdTransient = this.props.eventDetail.id;
        const ticket = await updateDataTicket(this.props.ticket);
        console.log(ticket);
        let action = {
            ...fetchticketsavesuccess,
            ticket: ticket,
            category: ticket.category,
            eventDetail: ticket.eventDetail,
            ticketCode: ticket.ticketCodes
        }
        this.props.dispatch(action)
        this.props.dispatch({...clearstateonstate})
        this.props.dispatch({...clearstatefree})

    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const ticket = await saveDataTicket(this.props.ticketForm)
        console.log(ticket);
        let action = {
            ...fetchticketsavesuccess,
            ticket: ticket,
            category: ticket.category,
            eventDetail: ticket.eventDetail,
            ticketCode: ticket.ticketCodes
        }
        this.props.dispatch(action)
        this.props.dispatch({...clearstate})
    }

    componentDidMount() {
        this.dataCategory()
        let event = this.props.company.id;
        this.dataEventByCompany(event)
    }

    dataCategory = async () => {
        const data = await fetchDataCategory();
        if (!(data === undefined)) {
            let action = {...fetchcategorysucces, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    dataEventByCompany = async (event) => {
        const data = await fetchDataEventByCompany(event);
        if (!(data === undefined)) {
            let action = {...fetcheventsuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    dataEventById = async (idEvent) => {
        const data = await fetchDataEventId(idEvent);
        if (!(data === undefined)) {
            let action = {...fetcheventdetailsuccess, payload: data.eventDetailList}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    handleInputIdEvent = (event) => {
        console.log(event.target.value)
        this.props.dispatch({...handleeventid, eventTransient: event.target.value})
        const idEvent = this.props.eventTransient
        this.dataEventById(idEvent);
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketForm)
