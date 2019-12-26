import React, {Component} from 'react';
import {Provider} from "react-redux";
import FormRegister from "./components/FormRegister";
import {createStore} from "redux";
import registerReducer from "./reducer/RegisterReducer";
import {Switch} from "react-router-dom";
import StepWizard from 'react-step-wizard';
import Footer from "../../layout/customer/Footer";
export default class RegisterContainer extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(registerReducer)}>
                    <StepWizard>

                        <FormRegister/>
                        <FormRegister/>
                    </StepWizard>
                </Provider>
            </>
        );
    }
}
