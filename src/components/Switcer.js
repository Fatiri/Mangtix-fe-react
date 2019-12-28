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
    BookingRoute, BookingRouteAdmin, EventDetailRoute, EventFormRoute, EventScheduleRoute, EventsRoute,
    LoginRoute,
    PublicRoute, RegistrationCustomerRoute, RegistrationManagementRoute,
    RegistrationRoute, TicketFormRoute,
    TicketListRoute, TicketRoute
} from "./constants/customRoute";
import {CategoryRoute, TicketDetailRoute} from "./constants";
class Switcer extends Component {
    render() {
        return (
            <>


            <Switch>
                {/*admin component*/}
                <AdminRoute exact path="/admin" ></AdminRoute>
                <EventsRoute exact path="/events"></EventsRoute>
                {/*<TicketRoute exact path="/tickets"></TicketRoute>*/}
                <Route exact path="/location"><LocationContainer/></Route>
                {/*public component*/}
                <PublicRoute exact path="/" ></PublicRoute>
                <RegistrationRoute exact path="/registration"></RegistrationRoute>
                <RegistrationManagementRoute exact path="/management/registration"></RegistrationManagementRoute>
                <RegistrationCustomerRoute exact path="/customer/registration"></RegistrationCustomerRoute>
                <LoginRoute exact path="/login"></LoginRoute>
                <BookingRoute exact path="/booking"></BookingRoute>
                <EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>
                <TicketRoute exact path="/ticket"></TicketRoute>
                <Route exact path="/event"></Route>
                <CategoryRoute exact path="/category"></CategoryRoute>
                <BookingRouteAdmin exact path="/booking-list"></BookingRouteAdmin>
                <Route exact path="/users">Users</Route>
                {/*<Route exact path="/dashboard"></Route>*/}
                <Route exact path="/">Ticket</Route>
                <Route exact path="/payment">Payment</Route>
                <Route exact path="/cart">Cart</Route>
                <Route exact path="/chatting">Chatting</Route>

            </Switch>
            </>
        );
    }
}

export default Switcer;
