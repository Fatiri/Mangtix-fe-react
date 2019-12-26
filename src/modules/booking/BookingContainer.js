import React, {Component} from 'react';
import {Provider} from "react-redux";
import bookingReducer from "./reducer/BookingReducer";
import {createStore} from "redux";

class BookingContainer extends Component {
    render() {
        return (
            <div className="row">
            <Provider store={createStore(bookingReducer)}><BookingList/>
            </Provider>
            </div>
         );
    }
}

export default BookingContainer;
