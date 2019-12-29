import React, {Component} from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class AdminSidebar extends Component {
    handleButtonToggled(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
    };
    render() {
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
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="collapse"
                              data-target="#collapseBootstrap"
                              aria-expanded="true" aria-controls="collapseBootstrap">
                            <i className="far fa-fw fa-window-maximize"/>
                            <span>User Management</span>
                        </Link>
                        <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">User Detail</h6>
                                <Link className="collapse-item" to="/users">
                                    <i className="fas fa-fw fa-shopping-cart"/> User
                                </Link>
                                <Link className="collapse-item" to="/booking">Booking</Link>
                                <Link className="collapse-item" to="/events">Buttons</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="cart">
                            <i className="fas fa-fw fa-shopping-basket"/>
                            <span>Cart</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/booking-list">
                            <i className="fas fa-fw fa-credit-card"/>
                            <span>Booking</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/event-list">
                            <i className="fas fa-fw fa-credit-card"/>
                            <span>Event</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/event">
                            <i className="fas fa-fw fa-credit-card"/>
                            <span>Event</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category">
                            <i className="fas fa-fw fa-location-arrow"/>
                            <span>Category</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ticket-list-admin">
                            <i className="fas fa-fw fa-home"/>
                            <span>Ticket</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="version" id="version-mangtix"/>
                </ul>
            </>
        );
    }
}
