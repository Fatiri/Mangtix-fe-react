import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchDataRoleByRoleName} from "../service/RegistrationService";
import {registrationRole} from "../RegistartionAction";


class FormRegistration extends Component {
    render() {
        return (
            <div>
                <div className="container-login">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card shadow-sm my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="login-form">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-100 mb-4">Register</h1>
                                                </div>
                                                <div>
                                                    <p><Link to="/customer/registration" className="btn btn-primary btn-block" onClick={()=>{this.roleByRoleName("CUSTOMER")}}>Customer</Link></p>
                                                    <p><Link onClick={()=>{this.roleByRoleName("MANAGEMENT")}} to="/management/registration" className="btn btn-primary btn-block">Management</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    roleByRoleName=async(roleName)=>{
        const data=await fetchDataRoleByRoleName(roleName);
        let action = {...registrationRole, roleIdTransient:data.id}
        console.log(action,"role")
        this.props.dispatch(action);
    }
}
const mapsStateToProps = (state) => {
    return {...state}
}

export default connect(mapsStateToProps)(FormRegistration);
