import React, {Component} from 'react';
import {connect} from "react-redux";
import EventSchedule from "../../../../layout/customer/EventSchedule";

class ListSchedule extends Component {
    render() {
        return (
            <div>
                <EventSchedule/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(ListSchedule)
