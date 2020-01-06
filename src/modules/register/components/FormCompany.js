import React, {Component} from 'react';
import {connect} from "react-redux";
import Authentication from "../../../authentication/Authentication";
import {Link, Redirect} from "react-router-dom";
import {registrationNameCompany, userIdCompany} from "../RegistartionAction";
import {registrationPost} from "../service/RegistrationService";
import {saveDataCompany} from "../../company/service/CompanyService";

class FormCompany extends Component {
    render() {
        const Auth = new Authentication();
        if (Auth.isLogin()){
            alert("has been login")
            return <Redirect t="/"/>
        }
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
                                                    <h1 className="h4 text-gray-900 mb-4">Company</h1>
                                                </div>
                                                    <div className="form-group">
                                                        <input type="username" className="form-control"
                                                               id="exampleInputEmail" aria-describedby="emailHelp"
                                                               placeholder="Company Name..." onChange={this.handleInputCompanyName}/>
                                                    </div>


                                                <div>
                                                    <p><button className="btn btn-primary btn-block"  onClick={this.props.previousStep}>Previous Step</button></p>
                                                    <p><button className="btn btn-primary btn-block"  onClick={this.handleCreateRegistration}>Create Account</button></p>
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

    handleInputCompanyName = (companyName)=>{
        companyName.preventDefault();
        this.props.dispatch({...registrationNameCompany, companyName:companyName.target.value})
        console.log(this.props.companyInfo)
    }

    handleSubmitRegistration=async ()=>{
        const dataUser = {...this.props.userInfo}
        console.log(dataUser)
        const registrationData = await registrationPost(dataUser);
        this.props.dispatch({...userIdCompany, userIdTransient:registrationData.id})
        console.log()
    }

    handleCreateRegistration=async ()=>{
        await this.handleSubmitRegistration();
        console.log(this.props.companyInfo)
        const dataCompany = await {...this.props.companyInfo}
        console.log(this.props.companyInfo)
        const dataCompanyAfterPost = await saveDataCompany(dataCompany);
        console.log(dataCompanyAfterPost)
    }

    }
    const mapsStateToProps=(state)=>{
        return {...state}
    }

    export default connect (mapsStateToProps) (FormCompany);
