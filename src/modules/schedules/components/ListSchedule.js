import React, {Component} from 'react';
import EventSchedule from "../../../layout/customer/EventSchedule";
import {connect} from "react-redux";

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
