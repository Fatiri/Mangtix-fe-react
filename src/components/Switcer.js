import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LocationContainer from "../modules/location/LocationContainer";
import CategoryContainer from "../modules/categories/CategoryContainer";
import {
    AdminRoute,
    BookingRoute, EventScheduleRoute,
    EventsRoute,
    LoginRoute,
    PublicRoute,
    RegistrationRoute,
    TicketListRoute
} from "./constants";
import $ from "jquery";

class Switcer extends Component {
    constructor(props) {
        super(props);
        this.state={
            hide:false
        }
    }

    handleButtonToggled(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
    };
    hideHeader = ()=>{
        const { hide } = this.state
        this.setState({ hide: !hide  })
    }
    render() {
        return (
            <>
            <Switch>
                {/*admin component*/}
                <AdminRoute exact path="/admin" ></AdminRoute>
                <Route exact path="/location"><LocationContainer/></Route>

                {/*public component*/}
                <PublicRoute exact path="/" ></PublicRoute>
                <RegistrationRoute exact path="/registration"></RegistrationRoute>
                <LoginRoute exact path="/login"></LoginRoute>
                <BookingRoute exact path="/booking"></BookingRoute>
                <TicketListRoute exact path="/ticket"></TicketListRoute>
                <EventsRoute exact path="/events"></EventsRoute>
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
