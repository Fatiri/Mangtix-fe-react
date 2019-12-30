import React, {Component} from 'react';

import TicketList from "./components/TicketList";

class TicketContainer extends Component {
    render() {
        return (
            <div>
                <TicketList/>
            </div>
        );
    }
}

export default TicketContainer;
