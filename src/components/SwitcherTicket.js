import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";
import CategoryContainer from "../modules/categories/CategoryContainer";
import TicketContainer from "../modules/tickets/TicketContainer";
import TicketForm from "../modules/tickets/components/component-admin/TicketForm";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ticketReducer from "../modules/tickets/reducer/TicketReducer";
import TicketListAdmin from "../modules/tickets/components/component-admin/TicketListAdmin";
import EventDetail from "../modules/events/components/adminComponent/EventDetail";
import eventReducer from "../modules/events/reducer/EventReducer";
import EventByCompany from "../modules/events/components/adminComponent/EventByCompany";
import EventForm from "../modules/events/components/adminComponent/EventForm";
import TicketDetail from "../modules/tickets/components/component-admin/TicketDetail";

import {
    AdminRoute,
    BookingRoute, EventScheduleRoute, EventsRoute,
    LoginRoute,
    PublicRoute, RegistrationCustomerRoute, RegistrationManagementRoute,
    RegistrationRoute, TicketFormRoute,
    TicketListRoute, TicketRoute
} from "./constants/customRoute";
import {TicketDetailRoute} from "./constants";

class SwitcherTicket extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(ticketReducer)}>
                    <TicketFormRoute exact path="/ticket-form"></TicketFormRoute>
                    <TicketDetailRoute exact path="/ticket-detail"></TicketDetailRoute>
                    <TicketListRoute exact path="/ticket-list-admin"></TicketListRoute>
                </Provider>

            </>
        );
    }
}

export default SwitcherTicket;
