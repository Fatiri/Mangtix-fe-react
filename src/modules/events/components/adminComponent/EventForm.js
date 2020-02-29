import React from 'react';
import {
    addeventdetail, clearstate, fetchlocationsuccess,
    handledescriptionevent,
    handledescriptioneventdetail,
    handleeventdate,
    handleeventday, handleeventimage,
    handleeventname, handleeventpdf, handlelocationid,
    handlevenue
} from "../../EventAction";
import {connect} from "react-redux";
import {saveDataEvent} from "../../service/EventService";
import {fetchDataLocation} from "../../../location/service/LocationServices";
import decodeJwtToken from "../../../../authentication/AutheticationDecodeJwt";

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
                                    className="fas fa-arrow-alt-circle-left"></i></button>
                            </h5>
                            <br/>
                            <h3 className="card-category">Add Event</h3>
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
                                        <label className="col-form-label">Foto Event</label>
                                        <input type="file" className="form-control"onChange={(event) => {
                                            this.props.dispatch({...handleeventimage, multipartImage: event.target.files[0]})
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
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label">Permission Letter</label>
                                        <input type="file" className="form-control"
                                                onChange={(event) => {
                                            this.props.dispatch({...handleeventpdf, multipartFile: event.target.files[0]})
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
                                            <input type="date" className="form-control" value={element.eventDate}
                                                   onChange={(event) => {
                                                       this.handleInputDate(event,index)
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

    handleInputDate=(event, index)=>{
        let date = event.target.value
        console.log(event.target.value)
        const year = date.substring(0, 4)
        const mounth = date.substring(5, 7)
        const day = date.substring(8, 10)
        let dateFormat = day+"-"+mounth+"-"+year;
        this.props.dispatch({...handleeventdate, eventDate: dateFormat, index: index})
        console.log(this.props.eventForm)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = decodeJwtToken();
        const companyId = token.aud;
        this.props.eventForm.companyIdTransient= companyId;
        let event = this.props.eventForm
        let multipartFile = this.props.multipartFile;
        console.log(multipartFile)
        let multipartImage = this.props.multipartImage;
        console.log(multipartImage)
        await saveDataEvent(event, multipartFile, multipartImage)
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
export default connect(mapStateToProps)(EventForm)
