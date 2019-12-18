import React, {Component} from 'react';
import $ from 'jquery';
import Interfaces from './layout/customer/Interfaces';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import {createStore} from "redux";
// import {Provider} from "react-redux";
import BookingContainer from "./modules/booking/BookingContainer";
import CategoryContainer from "./modules/categories/CategoryContainer";
import Admin from "./layout/admin/admin";
// import EventContainer from "./modules/events/EventContainer";
// import LoginContainer from "./modules/login/LoginContainer";
// import PaymentContainer from "./modules/payment/PaymentContainer";
// import TicketContainer from "./modules/tickets/TicketContainer";
// import UserContainer from "./modules/users/UserContainer";
// import BookingReducer from "./modules/booking/reducer/BookingReducer";
// import CategoryReducer from "./modules/categories/reducer/CategoryReducer";
// import EventReducer from "./modules/events/reducer/EventReducer";
// import LoginReducer from "./modules/login/reducer/LoginReducer";
// import PaymentReducer from "./modules/payment/reducer/PaymentReducer";
// import TicketReducer from "./modules/tickets/reducer/TicketReducer";
// import UserReducer from "./modules/users/reducer/UserReducer";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Admin/>
                    {/*<Interfaces/>*/}
                    <Switch>
                        <Route exact path="/"><BookingContainer/></Route>
                        <Route path="/"><CategoryContainer/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
