import React from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchDataEventId, updateDataEvent} from "../../service/EventService";
import {handleChangeData, handleupdate} from "../../EventAction";
import {imgUrl} from "../../../../services/serviceCenter";
import decodeJwtToken from "../../../../authentication/AutheticationDecodeJwt";


class EventDetail extends React.Component {
    render() {
        function goBack() {
            window.history.back()
        }
        let role;
        const dataToken = decodeJwtToken();
        if (!(dataToken === null)) {
            const sub = dataToken.sub;
            console.log(sub, "role")
             role = sub;
        }
        return (
            <div>
                <div className="card-header card-header-primary">
                    <h5 className="card-title">
                        <button className="btn btn-primary" onClick={goBack}><i
                            className="fas fa-arrow-alt-circle-left"></i></button>
                    </h5>
                    <br/>
                    <h3 className="card-category">Detail Event</h3>
                    {role === "ADMIN"?this.props.eventById.publishStatus===true?"":<button
                                              onClick={() => this.handleUpdateAdmin(this.props.eventById.id)} className="btn btn-primary">Validation</button>
                        :role ==="MANAGEMENT"?
                    <Link to={"/event-update"} onClick={() => this.handleUpdate(this.props.eventById.id)}  className="btn btn-warning">Update</Link>:""}

                </div>
                <form>
                    <div className="row">
                        <div className="card-image">
                            <img className="card-image-event" src={imgUrl+`/${this.props.eventById.id}`}/>
                        </div>
                        <div className="columns-event"><h3>{this.props.eventById.eventName}</h3><br/>
                            <h4>{this.props.eventById.descriptionEvent}</h4>
                            <h4>{this.handlePublishStatus(this.props.eventById.publishStatus)}</h4></div>
                        <br/>
                        <br/>
                    </div>
                    {this.props.eventDetail.map((element, index) => {
                        return <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{element.eventDay} || {element.eventDate}</h5>
                                        <p className="card-text">Venue : {element.venue}</p>
                                        <p className="card-text">{element.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </form>


            </div>
        )
    }
    handlePublishStatus = (data) => {
        if (data) {
            return "Validated"
        } else {
            return "Has not been validated"
        }
    }
    handleUpdate = async (id) => {
        console.log(id + "ini id")
        const data = await fetchDataEventId(id)
        console.log(data.eventName + "ini data event form")
        this.props.dispatch({...handleupdate, payload: data})
        console.log(this.props.eventForm)
    }
    handleUpdateAdmin = async (id) => {
        console.log(id + "ini id")
        const data = await fetchDataEventId(id)
        console.log(data.eventName + "ini data event form")
        data.publishStatus=true;
        // this.props.dispatch({...handleupdate, payload: data})
        await updateDataEvent(data);
        console.log(this.props.eventForm)
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToPropsEventDetail");
    return {...state};
}
export default connect(mapStateToProps)(EventDetail)
