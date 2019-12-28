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
                                <Route exact path="/registration"><RegisterContainer/></Route>
                                <Route exact path="/login"><LoginContainer/></Route>
                                <Route exact path="/users">Users</Route>
                                <Route exact path="/location"><LocationContainer/></Route>
                                <Route exact path="/category"><CategoryContainer/></Route>
                                {/*<Route exact path="/dashboard"></Route>*/}
                                <Route exact path="/booking"><BookingContainer/></Route>
                                <Route exact path="/events"><EventContainer/></Route>
                                <Route exact path="/ticket"><TicketContainer/></Route>
                                <Route exact path="/ticket-form"><Provider store={createStore(ticketReducer)}><TicketForm/></Provider></Route>
                                <Provider store={createStore(ticketReducer)}>
                                <Route exact path="/ticket-detail"><TicketDetail/></Route>
                                <Route exact path="/ticket-list-admin"><TicketListAdmin/></Route>
                                </Provider>
                                <Provider store={createStore(eventReducer)}>
                                <Route exact path="/event-detail"><EventDetail/></Route>
                                <Route exact path="/event-form"><EventForm/></Route>
                                <Route exact path="/event-list"><EventByCompany/></Route></Provider>
                                <Route exact path="/payment">Payment</Route>
                                <Route exact path="/cart">Cart</Route>
                                <Route exact path="/chatting">Chatting</Route>
                                {/*<Route exact path="/login"><LoginContainer/></Route>*/}
                                <Route exact path="/ticket"><TicketList/></Route>
                                <Route exact path="/event"><ListEvent/></Route>
                                <Route exact path="/event-schedule"><ListSchedule/></Route>

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
