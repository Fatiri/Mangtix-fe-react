import React, {Component} from 'react';
import {Provider} from "react-redux";
import FormRegister from "../register/components/FormRegisterManagement";
import {createStore} from "redux";
import loginReducer from "./reducer/LoginReducer";
import {Switch} from "react-router-dom";

class LoginContainer extends Component {
    render() {
        return (
            <>

                <FormRegister/>
            </>
        );
    }
}

export default LoginContainer;
