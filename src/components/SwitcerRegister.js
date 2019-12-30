import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {

    RegistrationCustomerRoute,
    RegistrationManagementRoute,
    RegistrationRoute
} from "./constants";
import registrationReducer from "../modules/register/reducer/RegistrationReducer";

class SwitcerRegister extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(registrationReducer)}>
                    <RegistrationRoute exact path="/registration"></RegistrationRoute>
                    <RegistrationManagementRoute exact path="/management/registration"></RegistrationManagementRoute>
                    <RegistrationCustomerRoute exact path="/customer/registration"></RegistrationCustomerRoute>
                </Provider>
            </>
        );
    }
}

export default SwitcerRegister;
