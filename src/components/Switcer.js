import React, {Component} from 'react';
import Admin from "../layout/admin/Admin";
import AdminNavBar from "../layout/admin/AdminNavBar";
import {Route, Switch} from "react-router-dom";
import RegisterContainer from "../modules/register/RegisterContainer";
import LoginContainer from "../modules/login/LoginContainer";
import TicketList from "../modules/tickets/components/TicketList";
import ListEvent from "../modules/events/components/ListEvent";
import ListSchedule from "../modules/schedules/components/ListSchedule";
import AdminFooter from "../layout/admin/AdminFooter";
import BookingContainer from "../modules/booking/BookingContainer";
import EventContainer from "../modules/events/EventContainer";
import App from "../App";
import LocationContainer from "../modules/location/LocationContainer";
import CategoryContainer from "../modules/categories/CategoryContainer";
import TicketContainer from "../modules/tickets/TicketContainer";
import TicketForm from "../modules/tickets/components/component-admin/TicketForm";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ticketReducer from "../modules/tickets/reducer/TicketReducer";

class Switcer extends Component {
    render() {
        return (
            <>
                <Admin/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <AdminNavBar/>
                        <div className="container-fluid" id="container-wrapper">

                            <Switch>
                                <Route exact path="/registration"><RegisterContainer/></Route>
                                <Route exact path="/login"><LoginContainer/></Route>
                                <Route exact path="/users">Users</Route>
                                <Route exact path="/location"><LocationContainer/></Route>
                                <Route exact path="/category"><CategoryContainer/></Route>
                                {/*<Route exact path="/dashboard"></Route>*/}
                                <Route exact path="/booking"><BookingContainer/></Route>
                                <Route exact path="/events"><EventContainer/></Route>
                                <Route exact path="/ticket"><TicketContainer/></Route>
                                <Route exact path="/ticket-form"><Provider store={createStore(ticketReducer)}><TicketForm/></Provider>
                                </Route>
                                <Route exact path="/payment">Payment</Route>
                                <Route exact path="/cart">Cart</Route>
                                <Route exact path="/chatting">Chatting</Route>
                                {/*<Route exact path="/login"><LoginContainer/></Route>*/}
                                <Route exact path="/ticket"><TicketList/></Route>
                                <Route exact path="/event"><ListEvent/></Route>
                                <Route exact path="/event-schedule"><ListSchedule/></Route>
                                <Route exact path="/event-form"><EventContainer/></Route>
                            </Switch>
                        </div>
                    </div>
                    {/*<Footer/>*/}
                    <AdminFooter/>
                </div>
            </>
        );
    }
}

export default Switcer;
