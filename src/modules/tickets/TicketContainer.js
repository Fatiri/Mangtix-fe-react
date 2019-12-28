import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";

import ticketReducer from "./reducer/TicketReducer";
import TicketList from "./components/TicketList";
import TicketForm from "./components/component-admin/TicketForm";
import {Switch} from "react-router-dom";

class TicketContainer extends Component {
    render() {
        return (
            <div>
                <TicketForm/>
            </div>
        );
    }
}

export default TicketContainer;
