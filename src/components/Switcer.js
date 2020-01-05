import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";

import {
    AdminRoute,
    BookingRoute, BookingRouteAdmin,
    LoginRoute, PaymentRouteAdmin,
    PublicRoute, TicketRoute,
} from "./constants/customRoute";
import {BookingRouteManagement, CategoryRoute, ChatRoute} from "./constants";
class Switcer extends Component {
    render() {
        return (
            <>


            <Switch>
                {/*admin component*/}
                <AdminRoute exact path="/dashboard" ></AdminRoute>
                {/*<TicketRoute exact path="/tickets"></TicketRoute>*/}
                <Route exact path="/location"><LocationContainer/></Route>
                {/*public component*/}
                <PublicRoute exact path="/" ></PublicRoute>

                <LoginRoute  path="/login"></LoginRoute>
                <BookingRoute  path="/booking"></BookingRoute>
                {/*<EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>*/}
                {/*<EventRoute exact path="/event"></EventRoute>*/}
                <TicketRoute  path="/ticket"></TicketRoute>
                <CategoryRoute  path="/category"></CategoryRoute>
                <BookingRouteAdmin  path="/booking-list"></BookingRouteAdmin>
                <BookingRouteManagement  path="/management/booking-list"></BookingRouteManagement>
                <PaymentRouteAdmin  path="/admin/payment-list"></PaymentRouteAdmin>
                <ChatRoute  path="/chat-form"></ChatRoute>
                <Route  path="/users">Users</Route>
                {/*<Route exact path="/dashboard"></Route>*/}
                <Route  path="/payment">Payment</Route>
                <Route  path="/chatting">Chatting</Route>

            </Switch>
            </>
        );
    }
}

export default Switcer;
