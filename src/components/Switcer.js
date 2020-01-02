import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";

import {
    AdminRoute,
    BookingRoute, BookingRouteAdmin,
    LoginRoute, PaymentRouteAdmin,
    PublicRoute, TicketRoute,
} from "./constants/customRoute";
import {CategoryRoute, ChatRoute} from "./constants";
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

                <LoginRoute exact path="/login"></LoginRoute>
                <BookingRoute exact path="/booking"></BookingRoute>
                {/*<EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>*/}
                {/*<EventRoute exact path="/event"></EventRoute>*/}
                <TicketRoute exact path="/ticket"></TicketRoute>
                <Route exact path="/event"></Route>
                <CategoryRoute exact path="/category"></CategoryRoute>
                <BookingRouteAdmin exact path="/booking-list"></BookingRouteAdmin>
                <PaymentRouteAdmin exact path="/admin/payment-list"></PaymentRouteAdmin>
                <ChatRoute exact path="/chat-form"></ChatRoute>
                <Route exact path="/users">Users</Route>
                {/*<Route exact path="/dashboard"></Route>*/}
                <Route exact path="/">Ticket</Route>
                <Route exact path="/payment">Payment</Route>
                <Route exact path="/chatting">Chatting</Route>

            </Switch>
            </>
        );
    }
}

export default Switcer;
