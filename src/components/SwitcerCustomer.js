import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import eventReducer from "../modules/events/reducer/EventReducer";
<<<<<<< HEAD
import {CartRoute, EventRoute, EventScheduleRoute} from "./constants";
=======
import {BookingRoute, CartRoute, EventRoute, EventScheduleRoute, PaymentRoute} from "./constants";
>>>>>>> 59cefcae19c3c392a45c51cf98626d08091c53f9
import reducerCustomer from "../reducerCustomer/ReducerCustomer";

class SwitcerCustomer extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(reducerCustomer)}>
                    <EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>
                    <EventRoute exact path="/event"></EventRoute>
                    <CartRoute exact path="/cart"></CartRoute>
<<<<<<< HEAD
=======
                    <BookingRoute exact path="/booking"></BookingRoute>
                    <PaymentRoute exact path="/payment"></PaymentRoute>
>>>>>>> 59cefcae19c3c392a45c51cf98626d08091c53f9
                </Provider>
            </>
        );
    }
}

export default SwitcerCustomer;
