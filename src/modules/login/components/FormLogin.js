import React, {Component} from 'react';
import {connect} from "react-redux";
import {companyId, loginPassword, loginUsername, role, userId} from "../reducer/LoginAction";
import Authentication from "../../../authentication/Authentication";
import {Link, Redirect} from "react-router-dom";
import {GenerateTokenAccess} from "../service/AuthenticationLoginService";
import decodeJwtToken from "../../../authentication/AutheticationDecodeJwt";

class FormLogin extends Component {
    render() {
        const Auth = new Authentication();
        if (Auth.isLogin()){
            const data = decodeJwtToken();
           if (data===null){
               localStorage.clear();
               alert("you must login correctly")
           }else {
               if (data.sub === "ADMIN") {
                   return <Redirect to="/dashboard"/>
               } else if (data.sub === "MANAGEMENT") {
                   return <Redirect to="/dashboard"/>
               } else {
                   return <Redirect to="/"/>
               }
           }
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
                                                    <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                                </div>
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
                                                        <button
                                                           className="btn btn-primary btn-block" onClick={this.handleSubmitLoginAction}>Login</button>
                                                    </div>
                                                    <hr/>
                                                <hr/>
                                                <div className="text-center">
                                                    <Link to="/registration" className="font-weight-bold small" >Create
                                                        an Account!</Link>
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
        this.props.dispatch ({...loginUsername, userName:username.target.value})
    }

    handleInputPassword=(password)=>{
        password.preventDefault();
        this.props.dispatch({...loginPassword, password: password.target.value})
    }

    handleSubmitLoginAction= async ()=>{
        const dataUser = {...this.props.userAccess}
        console.log(dataUser)
        if(!(dataUser===null)){
            const token = await GenerateTokenAccess(dataUser);
            localStorage.clear();
            localStorage.setItem("token", token.jwt);
            const dataToken = decodeJwtToken();
            if (!(dataToken===null)){
                this.props.dispatch({...role, role:dataToken.sub})
                this.props.dispatch({...userId, userId:dataToken.jti})
                this.props.dispatch({...companyId, companyId:dataToken.aud})
                console.log(this.props.tokenDecode)
            }
           else {
               localStorage.clear();
                alert("you must login correctly")
                return <Redirect to="/login"/>
            }
        }
    }
}
const mapsStateToProps=(state)=>{
    return {...state}
}

export default connect (mapsStateToProps) (FormLogin);
