import React from 'react'
import {connect} from "react-redux";


class EventDetail extends React.Component{
    render() {
        return(
            <div>
                <div> <label>Venue Event</label>
                        <input className="form-control" value={this.props.eventById.id}/>
                        <label>Event Day</label>
                        <input className="form-control" />
                        <label>Event Date</label>
                        <input className="form-control" />
                        <label>Event Detail Description</label>
                        <textarea />
                        <label>Location Event</label>
                        <input />
                    </div>

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToPropsEventDetail");
    return {...state};
}
export default connect(mapStateToProps)(EventDetail)
