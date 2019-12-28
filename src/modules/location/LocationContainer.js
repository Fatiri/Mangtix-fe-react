import React, {Component} from 'react';
import FormLocation from "./components/FormLocation";
import {Provider} from "react-redux";
import {createStore} from "redux";
import locationReducer from "./reducer/LocationReducer";

class LocationContainer extends Component {
    render() {
        return (
            <div className="row">

                <FormLocation/>

            </div>
         );
    }
}

export default LocationContainer;
