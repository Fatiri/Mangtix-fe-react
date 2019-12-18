import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './layout/customer/Header';
import Footer from "./layout/customer/Footer";
import TicketList from "./modules/tickets/components/TicketList";
import ListEvent from "./modules/events/components/ListEvent";
import ListSchedule from "./modules/schedules/components/ListSchedule";
import Admin from "./layout/admin/admin";
import LoginContainer from "./modules/login/LoginContainer";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                <LoginContainer/>
                {/*    <Admin/>*/}
                    {/*<Adminnavbar/>*/}
                    {/*<Switch>*/}
                    {/*    <Route exact path="/ticket"><TicketList/></Route>*/}
                    {/*    <Route path="/event"><ListEvent/></Route>*/}
                    {/*    <Route path="/event-schedule"><ListSchedule/></Route>*/}
                    {/*</Switch>*/}
                    {/*<Footer/>*/}
                </div>
            </Router>
        );
    }
}
