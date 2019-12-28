import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import EventForm from "./components/adminComponent/EventForm";
import eventReducer from "./reducer/EventReducer";
import EventByCompany from "./components/adminComponent/EventByCompany";


class EventContainer extends Component {
    render() {
        console.log("ini Event")
        return (
            <div>
                <Provider store={createStore(eventReducer)}></Provider>

            </div>
         );
    }
}

export default EventContainer;
