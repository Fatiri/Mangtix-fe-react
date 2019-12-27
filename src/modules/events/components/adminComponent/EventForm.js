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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Event Name</label>
                    <input type="text" value={this.props.eventForm.eventName} onChange={(event) => {
                        this.props.dispatch({...handleeventname, eventName: event.target.value})
                    }} required/>
                    <label>Description Event</label>
                    <textarea value={this.props.eventForm.descriptionEvent} onChange={(event) => {
                        this.props.dispatch({...handledescriptionevent, descriptionEvent: event.target.value})
                    }} required/>
                    <button onClick={this.handleAddEventDetails}>Add Detail Event</button>
                    {this.props.eventForm.eventDetailList.map((element, index) => {
                        return<div>

                            <label>Venue Event</label>
                            <input className="form-control" value={element.venue} onChange={(event) => {
                                this.props.dispatch({...handlevenue, venue: event.target.value, index:index})
                            }} required/>
                            <label>Event Day</label>
                            <input className="form-control" value={element.eventDay} onChange={(event) => {
                                this.props.dispatch({...handleeventday, eventDay: event.target.value, index:index})
                            }} required/>
                            <label>Event Date</label>
                            <input className="form-control" value={element.eventDate} onChange={(event)=>{
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
                    <button type="submit" >Save</button>
                </form>
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
