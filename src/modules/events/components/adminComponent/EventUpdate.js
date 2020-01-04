import React from 'react';
import {
    addeventdetail, clearstate, fetchlocationsuccess,
    handledescriptionevent,
    handledescriptioneventdetail,
    handleeventdate,
    handleeventday,
    handleeventname,  handlelocationid,
    handlevenue
} from "../../EventAction";
import {connect} from "react-redux";
import {updateDataEvent} from "../../service/EventService";

import {fetchDataLocation} from "../../../location/service/LocationServices";

class EventUpdate extends React.Component {
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
                            <br/>
                            <h3 className="card-category">Update Event</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label">Event Name</label>
                                        <input type="text" className="form-control"
                                               value={this.props.eventForm.eventName} onChange={(event) => {
                                            this.props.dispatch({...handleeventname, eventName: event.target.value})
                                        }} required/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label className="col-form-label">Description Event</label>
                                        <textarea className="form-control" value={this.props.eventForm.descriptionEvent}
                                                  onChange={(event) => {
                                                      this.props.dispatch({
                                                          ...handledescriptionevent,
                                                          descriptionEvent: event.target.value
                                                      })
                                                  }} required/>
                                    </div>

                                    <button onClick={this.handleAddEventDetails}
                                            className="btn btn-primary col-md-12">Add Detail Event
                                    </button>
                                    <br/>
                                    {this.props.eventForm.eventDetailList.map((element, index) => {
                                        return <div className="card-body">

                                            <label>Venue Event</label>
                                            <input className="form-control" value={element.venue} onChange={(event) => {
                                                this.props.dispatch({
                                                    ...handlevenue,
                                                    venue: event.target.value,
                                                    index: index
                                                })
                                            }} required/>
                                            <label>Event Day</label>
                                            <input className="form-control" value={element.eventDay}
                                                   onChange={(event) => {
                                                       this.props.dispatch({
                                                           ...handleeventday,
                                                           eventDay: event.target.value,
                                                           index: index
                                                       })
                                                   }} required/>
                                            <label>Event Date</label>
                                            <input type="date" data-date-format="dd-mm-yyyy" className="form-control" value={element.eventDate}
                                                   onChange={(event) => {
                                                       this.props.dispatch({
                                                           ...handleeventdate,
                                                           eventDate: event.target.value,
                                                           index: index
                                                       })
                                                   }} required/>
                                            <label>Event Detail Description</label>
                                            <textarea className="form-control" value={element.description}
                                                      onChange={(event) => {
                                                          this.props.dispatch({
                                                              ...handledescriptioneventdetail,
                                                              description: event.target.value,
                                                              index: index
                                                          })
                                                      }} required/>
                                            <label className="col-sm-2 col-form-label">Location Event</label>
                                            <select value={this.props.eventForm.locationIdTransient}
                                                    onChange={(event) => {
                                                        this.props.dispatch(
                                                            {
                                                                ...handlelocationid,
                                                                locationIdTransient: event.target.value, index:index
                                                            })
                                                    }}
                                                    className="form-control" required>
                                                <option required>Choose Event</option>
                                                {this.props.dataLocation.map(element => {
                                                    if(!(element.address===""||element.address===null)) {
                                                        return <option value={element.id} required>
                                                            {element.address}
                                                        </option>
                                                    }
                                                })}
                                            </select>
                                            {/*<input type="text" disabled={true} className="form-control" value={this.props.locationEvent2.id}*/}
                                            {/*        required/>*/}
                                            {/*<Link to="/event-location" onClick={()=>this.props}>Choose Location</Link>*/}
                                            {/*<div className="form-group">*/}
                                            {/*    <button className="btn btn-primary" type="button"*/}
                                            {/*            data-toggle="collapse"*/}
                                            {/*            data-target={`#collapseExample${index}`} aria-expanded="false"*/}
                                            {/*            aria-controls="collapseExample">*/}
                                            {/*        Choose Location*/}
                                            {/*    </button>*/}
                                            {/*</div>*/}

                                            {/*<div className="form-group">*/}
                                            {/*    <div className="collapse" id={`collapseExample${index}`}>*/}
                                            {/*        <div className="card card-body">*/}
                                            {/*            <div className="form-group">*/}
                                            {/*                <FormLocationEvent/>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                        </div>
                                    })}
                                    <button type="submit" className="btn btn-success col-md-12">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleAddEventDetails = async (event) => {
        event.preventDefault()
        this.props.dispatch(addeventdetail)
    }
    handleUpdate = async (e) => {
        e.preventDefault();
        let event = this.props.eventForm

        await updateDataEvent(event)
        this.props.dispatch({...clearstate})
    }
    dataLocation=async ()=>{
        const data = await fetchDataLocation();
        if (!(data === undefined)) {
            let action = {...fetchlocationsuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    componentDidMount() {
        this.dataLocation()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(EventUpdate)
