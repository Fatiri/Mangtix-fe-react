import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";

import ticketReducer from "./reducer/TicketReducer";
import TicketForm from "./components/component-admin/TicketForm";

class TicketContainer extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(ticketReducer)}><TicketForm/></Provider>
            </div>
        );
    }
}

export default TicketContainer;
