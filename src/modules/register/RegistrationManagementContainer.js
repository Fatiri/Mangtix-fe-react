import React, {Component} from 'react';
import StepWizard from "react-step-wizard";
import FormRegister from "./components/FormRegisterManagement";
import FormCompany from "./components/FormCompany";

class RegistrationManagementContainer extends Component {
    render() {
        return (
            <div>
                <StepWizard>
                    <FormRegister/>
                    <FormCompany/>
                </StepWizard>
            </div>
        );
    }
}

export default RegistrationManagementContainer;