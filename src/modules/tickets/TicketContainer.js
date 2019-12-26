import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";

import ticketReducer from "./reducer/TicketReducer";
import TicketList from "./components/TicketList";

class TicketContainer extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(ticketReducer)}><TicketList/></Provider>
            </div>
        );
    }
}

export default TicketContainer;
