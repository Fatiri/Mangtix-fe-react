import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import eventReducer from "../events/reducer/EventReducer";
import EventForm from "../events/components/adminComponent/EventForm";
import companyReducer from "./reducer/CompanyReducer";
import CompanyForm from "./components/CompanyForm";

class CompanyContainer extends Component {
    render() {
        return (
            <Provider store={createStore(companyReducer)}><CompanyForm/></Provider>

        );
    }
}

export default CompanyContainer;
