import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";
import CategoryContainer from "../modules/categories/CategoryContainer";

import $ from "jquery";
import {
    AdminRoute,
    BookingRoute, EventScheduleRoute, EventsRoute,
    LoginRoute,
    PublicRoute,
    RegistrationRoute,
    TicketListRoute
} from "./constants/customRoute";
import {Provider} from "react-redux";
import {createStore} from "redux";
import loginReducer from "../modules/login/reducer/LoginReducer";
import registerReducer from "../modules/register/reducer/RegisterReducer";
class Switcer extends Component {
    render() {
        return (
            <>

            <Switch>
                {/*admin component*/}
                <AdminRoute exact path="/admin" ></AdminRoute>
                <EventsRoute exact path="/events"></EventsRoute>
                <Route exact path="/location"><LocationContainer/></Route>

                {/*public component*/}
                <PublicRoute exact path="/" ></PublicRoute>
                <Provider store={createStore(registerReducer)}>
                <RegistrationRoute exact path="/registration"></RegistrationRoute>
                </Provider>
                <Provider store={createStore(loginReducer)}>
                <LoginRoute exact path="/login"></LoginRoute>
                </Provider>
                <BookingRoute exact path="/booking"></BookingRoute>
                <TicketListRoute exact path="/ticket"></TicketListRoute>
                <EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>

                <Route exact path="/event"></Route>
                <Route exact path="/category"><CategoryContainer/></Route>
                <Route exact path="/users">Users</Route>
                {/*<Route exact path="/dashboard"></Route>*/}
                <Route exact path="/ticket">Ticket</Route>
                <Route exact path="/payment">Payment</Route>
                <Route exact path="/cart">Cart</Route>
                <Route exact path="/chatting">Chatting</Route>

            </Switch>

            </>
        );
    }
}

export default Switcer;
