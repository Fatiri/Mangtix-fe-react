import React from 'react';
import {
    addeventdetail,
    handledescriptionevent,
    handledescriptioneventdetail,
    handleeventdate,
    handleeventday,
    handleeventname, handlelocationid,
    handlevenue
} from "../../EventAction";
import {connect} from "react-redux";
import {saveDataEvent} from "../../service/EventService";

class EventForm extends React.Component {
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
                            <br/>
                            <h3 className="card-category">Add Event</h3>
                        </div>
                        <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-form-label">Event Name</label>
                    <input type="text" className="form-control" value={this.props.eventForm.eventName} onChange={(event) => {
                        this.props.dispatch({...handleeventname, eventName: event.target.value})
                    }} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-form-label">Description Event</label>
                    <textarea className="form-control" value={this.props.eventForm.descriptionEvent} onChange={(event) => {
                        this.props.dispatch({...handledescriptionevent, descriptionEvent: event.target.value})
                    }} required/>
                        </div>
                    <button onClick={this.handleAddEventDetails} className="form-control btn btn-primary">Add Detail Event</button>
                        <br/>
                    {this.props.eventForm.eventDetailList.map((element, index) => {
                        return<div className="card-body">

                            <label>Venue Event</label>
                            <input className="form-control" value={element.venue} onChange={(event) => {
                                this.props.dispatch({...handlevenue, venue: event.target.value, index:index})
                            }} required/>
                            <label>Event Day</label>
                            <input className="form-control" value={element.eventDay} onChange={(event) => {
                                this.props.dispatch({...handleeventday, eventDay: event.target.value, index:index})
                            }} required/>
                            <label>Event Date</label>
                            <input type="date" className="form-control" value={element.eventDate} onChange={(event)=>{
                                this.props.dispatch({...handleeventdate, eventDate: event.target.value, index:index})
                            }} required/>
                            <label>Event Detail Description</label>
                            <textarea className="form-control" value={element.description} onChange={(event)=>{
                                this.props.dispatch({...handledescriptioneventdetail, description:event.target.value, index:index})
                            }} required/>
                            <label>Location Event</label>
                            <input className="form-control" value={element.locationIdTransient} onChange={(event)=>{
                                this.props.dispatch({...handlelocationid, locationIdTransient: event.target.value, index:index})
                            }} required/>

                        </div>
                    })}
                    <button type="submit" className="form-control btn btn-success">Save</button>
                    </div>
                </form>
            </div>
                    </div>
                    </div>
                </div>
        )
    }

    handleAddEventDetails=async (event)=>{
        event.preventDefault()
        this.props.dispatch({...addeventdetail})
    }
    handleSubmit= async(event)=>{
        event.preventDefault();
        saveDataEvent(this.props.eventForm)
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(EventForm)
