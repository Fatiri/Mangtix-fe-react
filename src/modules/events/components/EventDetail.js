import React from 'react'
import {connect} from "react-redux";


class EventDetail extends React.Component{
    render() {
        return(
            <div>
                {this.props.eventDetail.map((element, index)=>{
                    return<div> <label>Venue Event</label>
                        <input className="form-control" value={element.venue}/>
                        <label>Event Day</label>
                        <input className="form-control" value={element.eventDay}/>
                        <label>Event Date</label>
                        <input className="form-control" value={element.eventDate}/>
                        <label>Event Detail Description</label>
                        <textarea value={element.description}/>
                        <label>Location Event</label>
                        <input value={element.locationIdTransient}/>
                    </div>
                })}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(EventDetail)
