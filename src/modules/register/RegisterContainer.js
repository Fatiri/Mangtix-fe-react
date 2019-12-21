import React, {Component} from 'react';
import {Provider} from "react-redux";
import FormRegister from "./components/FormRegister";

export default class RegisterContainer extends Component {
    render() {
        return (
            <>
                <FormRegister/>
            </>
        );
    }
}
