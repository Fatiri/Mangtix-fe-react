import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    clearState,
    registrationBirthDate,
    registrationBornPlace,
    registrationFUllName, registrationPassword,
    registrationUsername
} from "../RegistartionAction";
import {registrationPost} from "../service/RegistrationService";
import FormLocation from "../../location/components/FormLocationRegistration";
import Map from "../../location/components/MapRegistrationLocation";

class FormRegisterCustomer extends Component {
    render() {
        return (
            <>
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

                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" className="form-control"
                                                           id="exampleInputFirstName"
                                                           placeholder="Enter Full Name"
                                                           onChange={this.handleInputFullName}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Born Place</label>
                                                    <input type="text" className="form-control"
                                                           id="exampleInputEmail"
                                                           aria-describedby="emailHelp"
                                                           placeholder="Enter Born Place"
                                                           onChange={this.handleInputBornPlace}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Birth Date</label>
                                                    <input type="date" className="form-control"
                                                           id="exampleInputEmail"
                                                           aria-describedby="emailHelp"
                                                           placeholder="Enter Birth Date"
                                                           onChange={this.handleInputBirthDate}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control"
                                                           id="exampleInputEmail"
                                                           aria-describedby="emailHelp"
                                                           placeholder="Enter Username"
                                                           onChange={this.handleInputUsername}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control"
                                                           id="exampleInputPassword" placeholder="Password"
                                                           onChange={this.handleInputPassword}/>
                                                </div>

                                                <div className="form-group">
                                                <button className="btn btn-primary" type="button"
                                                        data-toggle="collapse"
                                                        data-target="#collapseExample" aria-expanded="false"
                                                        aria-controls="collapseExample">
                                                    Choose Location
                                                </button>
                                                </div>

                                                <div className="form-group">
                                                <div className="collapse" id="collapseExample">
                                                    <div className="card card-body">
                                                        <div className="form-group">
                                                            <FormLocation/>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>

                                                <div>
                                                    <Link className="btn btn-primary btn-block"
                                                            onClick={this.handleSubmitRegistration} to="/login">Create Account
                                                    </Link>
                                                </div>
                                                <hr/>

                                                <div className="text-center">
                                                    <Link to="/login" className="font-weight-bold small">Already have
                                                        an account?</Link>
                                                </div>
                                                <div className="text-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

    handleInputFullName = (fullName) => {
        fullName.preventDefault();
        this.props.dispatch({...registrationFUllName, fullName: fullName.target.value})
        console.log(this.props.userInfo)

    }

    handleInputBornPlace = (bornPlace) => {
        bornPlace.preventDefault();
        this.props.dispatch({...registrationBornPlace, bornPlace: bornPlace.target.value})
        console.log(this.props.userInfo)

    }

    handleInputBirthDate = (birthDate) => {
        birthDate.preventDefault();
        this.props.dispatch({...registrationBirthDate, birthDate: birthDate.target.value})
        console.log(this.props.userInfo)

    }

    handleInputUsername = (username) => {
        username.preventDefault();
        this.props.dispatch({...registrationUsername, userName: username.target.value})
        console.log(this.props.userInfo)

    }

    handleInputPassword = (password) => {
        password.preventDefault();
        this.props.dispatch({...registrationPassword, password: password.target.value})
        console.log(this.props.userInfo)
    }

    handleSubmitRegistration = async () => {
        const dataUser = {...this.props.userInfo}
        await registrationPost(dataUser);
        this.props.dispatch({...clearState})
    }
}

const mapsStateToProps = (state) => {
    console.log(state)
    return {...state}
}

export default connect(mapsStateToProps)(FormRegisterCustomer);
