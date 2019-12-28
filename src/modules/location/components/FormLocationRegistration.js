import React, {Component} from 'react';
import Map from "./MapRegistrationLocation";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux";
import registrationReducer from "../../register/reducer/RegistrationReducer";

class FormLocationRegistration extends Component {

    render() {
        return (
            <>
                <Provider store={createStore(registrationReducer)}>
                    <Map
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
export default connect(mapsStateToProps)(FormLocationRegistration);
