import React from 'react';
import {connect} from "react-redux";
import {fetchDataEventByCompany, fetchDataEventId} from "../../service/EventService";
import {fetcheventsuccess, handleChangeData, handlechangedata} from "../../EventAction";
import EventDetail from "./EventDetail";
import {Link} from "react-router-dom";

class EventByCompany extends React.Component {
    render() {
        return (
            <div className="col-xl-auto flex-column">
                <div className="card">
                    <div className="card-header card-header-success">
                    <span className="card-title ">
                        <Link to={"/event-form"} class="btn btn-outline-primary btn-sm " role="button"
                              aria-pressed="true">Add Event
                            </Link>
                    </span>
                        <br/>
                        <br/>
                        <h2 className="card-category">Event List</h2>
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                            <td>Event Name</td>
                            <td>Description</td>
                            <td>Action</td>
                            </thead>
                            {this.props.events.map((element, index) => {
                                return <tbody>
                                <td>{element.eventName}</td>
                                <td>{element.descriptionEvent}</td>
                                <td><Link to={"/event-detail"} onClick={() => {
                                    this.handleDetail(element.id)
                                }} className="btn btn-primary btn-sm">Detail</Link></td>
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
        const data = await fetchDataEventId(id)
        console.log(data.eventName + "ini data event form")
        this.props.dispatch({...handleChangeData, eventById: data, eventDetail: data.eventDetailList})
        console.log(this.props.eventById)
    }

    componentDidMount() {
        let data = this.props.company.id;
        this.dataEvent(data)
    }

    dataEvent = async (event) => {
        const data = await fetchDataEventByCompany(event);
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetcheventsuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps")
    return {...state}
}
export default connect(mapStateToProps)(EventByCompany)
