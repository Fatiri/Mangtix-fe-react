import React, {Component} from 'react';
import {Provider} from "react-redux";
import FormRegister from "../register/components/FormRegister";

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
