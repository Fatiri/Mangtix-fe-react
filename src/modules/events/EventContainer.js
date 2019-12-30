import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import EventForm from "./components/adminComponent/EventForm";
import eventReducer from "./reducer/EventReducer";
import EventByCompany from "./components/adminComponent/EventByCompany";
import ListEvent from "./components/userComponent/ListEvent";


class EventContainer extends Component {
    render() {
        console.log("ini Event")
        return (
            <div>
                <Provider store={createStore(eventReducer)}>
                    <ListEvent/>
                </Provider>

            </div>
         );
    }
}

export default EventContainer;
