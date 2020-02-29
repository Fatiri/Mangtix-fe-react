import React, {Component} from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";
import decodeJwtToken from "../../../authentication/AutheticationDecodeJwt";

export default class AdminSidebar extends Component {
    handleButtonToggled(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
    };
    render() {
        const role = decodeJwtToken();
        return (
            <>
                <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        <div className="sidebar-brand-icon ">
                            <img className="rounded-circle" src="img/logo.png"/>
                        </div>
                        <div className="sidebar-brand-text mx-3">MangTix</div>
                    </Link>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt"/>
                            <span>Dashboard</span></Link>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="sidebar-heading">
                        Features
                    </div>
                    {role.sub === "ADMIN" ?<li className="nav-item">
                        <Link className="nav-link" to="/booking-list">
                            <i className="fas fa-fw fa-credit-card"/>
                            <span>Booking</span>
                        </Link>

                    </li>
                        :<li className="nav-item">
                        <Link className="nav-link" to="/management/booking-list">
                            <i className="fas fa-fw fa-credit-card"/>
                            <span>Booking</span>
                        </Link>
                    </li>}

                    {role.sub === "ADMIN" ?<li className="nav-item">
                            <Link className="nav-link" to="/admin/event">
                                <i className="fas fa-fw fa-credit-card"/>
                                <span>Event</span>
                            </Link>
                        </li>
                    :<li className="nav-item">
                        <Link className="nav-link" to="/event-list">
                        <i className="fas fa-fw fa-credit-card"/>
                        <span>Event</span>
                        </Link>
                        </li>
                    }
                    {role.sub ==="ADMIN"?<li className="nav-item">
                        <Link className="nav-link" to="/category">
                            <i className="fas fa-fw fa-location-arrow"/>
                            <span>Category</span>
                        </Link>
                    </li>:""}

                    {role.sub === "MANAGEMENT"? <li className="nav-item">
                        <Link className="nav-link" to="/ticket-list-admin">
                            <i className="fas fa-fw fa-home"/>
                            <span>Ticket</span>
                        </Link>
                    </li>:""}
                  <li className="nav-item">
                        <Link className="nav-link" to="/admin/payment-list">
                            <i className="fas fa-fw fa-home"/>
                            <span>Payment</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="version" id="version-mangtix"/>
                </ul>
            </>
        );
    }
}
