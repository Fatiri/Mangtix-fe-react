import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginPassword, loginUsername} from "../reducer/LoginAction";
import {AuthenticationLogin} from "../service/AuthenticationLoginService";

class FormLogin extends Component {
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
                                                    <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="username" className="form-control"
                                                               id="exampleInputEmail" aria-describedby="emailHelp"
                                                               placeholder="Username..." onChange={this.handleInputUsername}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control"
                                                               id="exampleInputPassword" placeholder="Password" onChange={this.handleInputPassword}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small"
                                                             style={{lineHeight: "1.5rem"}}>
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="customCheck"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck">Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <a href="index.html"
                                                           className="btn btn-primary btn-block">Login</a>
                                                    </div>
                                                    <hr/>
                                                </form>
                                                <hr/>
                                                <div className="text-center">
                                                    <a className="font-weight-bold small" href="register.html">Create
                                                        an Account!</a>
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

    handleInputUsername=(username)=>{
        username.preventDefault();
        this.props.dispatch = ({...loginUsername, username:username.target.value})
    }

    handleInputPassword=(password)=>{
        password.preventDefault();
        this.props.dispatch = ({...loginPassword, password: password.target.value})
    }

    handleSubmitLoginAction= async ()=>{
        const dataUser = {...this.props.userAccess}
        if(!(dataUser===null)){
            const token = await AuthenticationLogin(dataUser);
            localStorage.setItem("token", token.jwt);
        }
    }

}
const mapsStateToProps=(state)=>{
    return {...state}
}

export default connect (mapsStateToProps) (FormLogin);
