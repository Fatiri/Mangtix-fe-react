import React, {Component} from 'react';
import {
    EventAdminRoute,
    EventByCompanyRoute,
    EventDetailRoute,
    EventFormRoute,
    EventLocationRoute,
    EventUpdateRoute
} from "./constants";
import {Provider} from "react-redux";
import {createStore} from "redux";
import eventReducer from "../modules/events/reducer/EventReducer";

class SwitcherEvent extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(eventReducer)}>
                <EventDetailRoute exact path="/event-detail"></EventDetailRoute>
                <EventFormRoute exact path="/event-form"></EventFormRoute>
                <EventByCompanyRoute exact path="/event-list"></EventByCompanyRoute>
                    <EventLocationRoute exact path="/event-location"></EventLocationRoute>
                    <EventAdminRoute exact path="/admin/event"></EventAdminRoute>
                    <EventUpdateRoute exact path="/event-update"></EventUpdateRoute>
                </Provider>
            </>
        );
    }
}

export default SwitcherEvent;
