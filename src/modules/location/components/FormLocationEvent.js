import React, {Component} from 'react';
import Map from "./MapRegistrationLocation";
import { createStore} from "redux";
import {connect, Provider} from "react-redux";
import eventReducer from "../../events/reducer/EventReducer";
import MapEventLocation from "./MapEventLocation";

class FormLocationEvent extends Component {

    render() {
        return (
            <>
                <Provider store={createStore(eventReducer)}>
                    <MapEventLocation
                        google={this.props.google}
                        center={{lat: 18.5204, lng: 73.8567}}
                        height='300px'
                        zoom={15}
                    />
                </Provider>
            </>
        );
    }

}

const mapsStateToProps = (state) => {
    return {...state}
}
export default connect(mapsStateToProps)(FormLocationEvent);
