import React from 'react';
import {connect} from "react-redux";
import {fetcheventsuccess, handleChangeData} from "../../EventAction";

import {fetchDataEvent, fetchDataEventId} from "../../service/EventService";
import {Link} from "react-router-dom";


class EventAdmin extends React.Component {
    render() {

        return (
            <>
                <div className="col-xl-auto flex-column">
                    <div className="card">
                        <div className="card-header card-header-success">


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
                                    if (element.publishStatus===true){
                                        return <tbody className="publishStatus-true">
                                        <td>{element.eventName}</td>
                                        <td>{element.descriptionEvent}</td>
                                        <td><Link to={"/event-detail"} onClick={() => {
                                            this.handleDetail(element.id)
                                        }} className="btn btn-primary btn-sm">Detail</Link></td>
                                        </tbody>
                                    }else{
                                        return <tbody className="publishStatus-false">
                                        <td>{element.eventName}</td>
                                        <td>{element.descriptionEvent}</td>
                                        <td><Link to={"/event-detail"} onClick={() => {
                                            this.handleDetail(element.id)
                                        }} className="btn btn-primary btn-sm">Detail</Link></td>
                                        </tbody>
                                    }

                                })}

                            </table>
                        </div>
                    </div>
                </div>
            </>

        )
    }

    handleDetail = async (id) => {
        console.log(id + "ini id")
        const data = await fetchDataEventId(id)
        console.log(data.eventName + "ini data event form")
        this.props.dispatch({...handleChangeData, eventById: data, eventDetail: data.eventDetailList})
        console.log(this.props.eventById)
    }

    dataEvent=async ()=>{
        const data = await fetchDataEvent();
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetcheventsuccess, payload: data}
            console.log(action)
          this.props.dispatch(action)
        }
    }
    componentDidMount() {
        this.dataEvent()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(EventAdmin)
