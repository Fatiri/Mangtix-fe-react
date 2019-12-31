import React, {Component} from 'react';
import Authentication from "../../authentication/Authentication";
import decodeJwtToken from "../../authentication/AutheticationDecodeJwt";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class AdminNavBar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand navbar-fixed-top navbar-light bg-navbar topbar mb-4 static-top">
                    <button id="sidebarToggleTop" onClick={this.handleButtonToggled}
                            className="btn btn-link rounded-circle mr-3">
                        <i className="fa fa-bars"/>
                    </button>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow mx-1">
                            <div
                                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span
                                            className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Show All
                                    Alerts</a>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>
                         <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <span className="ml-2 d-none d-lg-inline text-white small">{this.props.userAccess.fullName}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                 aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <Link to="/login" className="dropdown-item" onClick={this.handleLogOut}>
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
    handleLogOut=()=>{
        localStorage.clear();
        const Auth = new Authentication();
        if (Auth.isLogin()){
            const dataToken = decodeJwtToken();
            if (!(dataToken===null)){

            }else {
                alert("wrong credential")
                localStorage.clear();
                return <Redirect to="/login"/>
            }
        }
        else {
            return <Redirect to="/login"/>
        }
    }

}

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(AdminNavBar);
