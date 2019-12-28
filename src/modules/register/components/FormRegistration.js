import React, {Component} from 'react';
import {Link} from "react-router-dom";


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
                                                    <h1 className="h4 text-gray-900 mb-4">Register</h1>
                                                </div>
                                                <div>
                                                    <p><Link to="/customer/registration" className="btn btn-primary btn-block">Customer</Link></p>
                                                    <p><Link to="/management/registration" className="btn btn-primary btn-block">Management</Link></p>
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
}


export default FormRegistration;