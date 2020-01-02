import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import Authentication from "../../authentication/Authentication";
import decodeJwtToken from "../../authentication/AutheticationDecodeJwt";
import {fetchDataUserBYId} from "../../modules/users/service/UserService";
import {fetchDataUser} from "../../modules/users/UserAction";
import {connect} from "react-redux";
import {fetchDataCartsByUser} from "../../modules/cart/service/CartService";
import {fetchcart} from "../../reducerCustomer/ActionReducerCustomer";

class Header extends Component {
    render() {

        return (
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                <div className="container">
                    <div className="row align-items-center position-relative">


                        <div className="site-logo">
                            <a href="index.html" className="text-black"><span className="text-primary"/>Mangtix</a>
                        </div>

                        <div className="col-12">
                            <nav className="site-navigation text-right ml-auto " role="navigation">

                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li><Link className="nav-link" to="/#">Home</Link></li>
                                    <li><a href="#services-section" className="nav-link">Services</a></li>
                                    <li><a href="#why-us-section" className="nav-link">Why Us</a></li>
                                    <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                                    <li><Link className="nav-link" to="/chat-form">Forum</Link></li>
                                    <li><Link className="nav-link" to="/event">Events</Link></li>
                                    {new Authentication().isLogin()?<li className="has-children">
                                            <a className="nav-link">Hi {this.props.userAccess.fullName}</a>
                                            <ul className="dropdown arrow-top">
                                                <li><Link className="nav-link" to="/cart">Cart</Link></li>
                                                <li><a href="#pricing-section" className="nav-link">Setting</a></li>
                                                <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                                                <li><Link onClick={this.handleLogOut}>Log Out</Link></li>
                                            </ul>
                                        </li>
                                        :<li><Link className="nav-link" to="/login">Login</Link></li>
                                        }
                                </ul>
                            </nav>

                        </div>

                        <div className="toggle-button d-inline-block d-lg-none">
                            <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black">
                                <span className="icon-menu h3"></span></a></div>

                    </div>
                </div>
            </header>

    );
    }
    componentDidMount() {
        this.handleFetchDataUser();
        this.dataCart();
    }

    handleLogOut=()=>{
        localStorage.clear();
        const Auth = new Authentication();
        if (Auth.isLogin()){
            const dataToken = decodeJwtToken();
            if (!(dataToken===null)){

            }else {
                localStorage.clear();
                return <Redirect to="/login"/>
            }
        }
        else {
            return <Redirect to="/login"/>
        }
    }

    handleFetchDataUser=async ()=>{
        const dataToken = decodeJwtToken();
        if (!(dataToken===null)){
            const idUser = dataToken.jti;
             const dataUser = await fetchDataUserBYId(idUser);
             this.props.dispatch({...fetchDataUser, userAccess:dataUser})
        }else {
            localStorage.clear();
            return <Redirect to="/login"/>
        }
    }
    dataCart=async ()=> {
        const dataToken = decodeJwtToken();
        if (!(dataToken === null)) {
            const idUser = dataToken.jti;
            const data = await fetchDataCartsByUser(idUser)
            let action = {...fetchcart, cart: data}
            this.props.dispatch(action)
        }
    }

    }

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)( Header);
