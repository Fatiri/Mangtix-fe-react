import React, {Component} from 'react';
import ListLocation from "./components/ListLocation";

class LocationContainer extends Component {
    render() {
        return (
            <div className="row">
                <ListLocation/>
            </div>
         );
    }
}

export default LocationContainer;
