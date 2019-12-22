import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import EventForm from "./components/EventForm";
import eventReducer from "./reducer/EventReducer";

class EventContainer extends Component {
    render() {
        console.log("ini Event")
        return (
            <div>
                <Provider store={createStore(eventReducer)}><EventForm/></Provider>
            </div>
         );
    }
}

export default EventContainer;
