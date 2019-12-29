import React, {Component} from 'react';
import {EventByCompanyRoute, EventDetailRoute, EventFormRoute} from "./constants";
import {Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ticketReducer from "../modules/tickets/reducer/TicketReducer";
import eventReducer from "../modules/events/reducer/EventReducer";

class SwitcherEvent extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(eventReducer)}>
                <EventDetailRoute exact path="/event-detail"></EventDetailRoute>
                <EventFormRoute exact path="/event-form"></EventFormRoute>
                <EventByCompanyRoute exact path="/event-list"></EventByCompanyRoute>
                </Provider>
            </>
        );
    }
}

export default SwitcherEvent;