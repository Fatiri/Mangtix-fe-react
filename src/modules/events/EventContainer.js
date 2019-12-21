import React, {Component} from 'react';
import EventList from "./components/adminComponent/EventList";

class EventContainer extends Component {
    render() {
        console.log("ini Event")
        return (
            <div>
            <EventList/>
            </div>
         );
    }
}

export default EventContainer;
