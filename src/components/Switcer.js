import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";
import CategoryContainer from "../modules/categories/CategoryContainer";

import {
    AdminRoute,
    BookingRoute, EventScheduleRoute, EventsRoute,
    LoginRoute,
    PublicRoute, RegistrationCustomerRoute, RegistrationManagementRoute,
    RegistrationRoute,
    TicketListRoute, TicketRoute
} from "./constants/customRoute";
class Switcer extends Component {
    render() {
        return (
            <>

            <Switch>
                {/*admin component*/}
                <AdminRoute exact path="/admin" ></AdminRoute>
                <EventsRoute exact path="/events"></EventsRoute>
                <TicketRoute exact path="/tickets"></TicketRoute>
                <Route exact path="/location"><LocationContainer/></Route>
                {/*public component*/}
                <PublicRoute exact path="/" ></PublicRoute>
                <RegistrationRoute exact path="/registration"></RegistrationRoute>
                <RegistrationManagementRoute exact path="/management/registration"></RegistrationManagementRoute>
                <RegistrationCustomerRoute exact path="/customer/registration"></RegistrationCustomerRoute>
                <LoginRoute exact path="/login"></LoginRoute>
                <BookingRoute exact path="/booking"></BookingRoute>
                <TicketListRoute exact path="/ticket"></TicketListRoute>
                <EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>

                <Route exact path="/event"></Route>
                <Route exact path="/category"><CategoryContainer/></Route>
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
