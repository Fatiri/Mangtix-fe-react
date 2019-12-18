import React, {Component} from 'react';

export default class Adminsidebar extends Component {
    render() {
        return (
            <>
                <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-text mx-3">MangTix</div>
                    </a>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"/>
                            <span>Dashboard</span></a>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="sidebar-heading">
                        Features
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="collapse"
                           data-target="#collapseBootstrap"
                           aria-expanded="true" aria-controls="collapseBootstrap">
                            <i className="far fa-fw fa-window-maximize"/>
                            <span>Bootstrap UI</span>
                        </a>
                        <div id="collapseBootstrap" className="collapse show" aria-labelledby="headingBootstrap"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header"></h6>
                                <a className="collapse-item" href="alerts.html">Alerts</a>
                                <a className="collapse-item" href="buttons.html">Buttons</a>
                                <a className="collapse-item" href="dropdowns.html">Dropdowns</a>
                                <a className="collapse-item " href="modals.html">Modals</a>
                                <a className="collapse-item" href="popovers.html">Popovers</a>
                                <a className="collapse-item" href="progress-bar.html">Progress Bars</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="forms.html">
                            <i className="fab fa-fw fa-wpforms"/>
                            <span>Forms</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse"
                           data-target="#collapseTable"
                           aria-expanded="true"
                           aria-controls="collapseTable">
                            <i className="fas fa-fw fa-table"/>
                            <span>Tables</span>
                        </a>
                        <div id="collapseTable" className="collapse" aria-labelledby="headingTable"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Tables</h6>
                                <a className="collapse-item" href="simple-tables.html">Simple Tables</a>
                                <a className="collapse-item" href="datatables.html">DataTables</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="ui-colors.html">
                            <i className="fas fa-fw fa-palette"/>
                            <span>UI Colors</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="sidebar-heading">
                        Examples
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse"
                           data-target="#collapsePage"
                           aria-expanded="true"
                           aria-controls="collapsePage">
                            <i className="fas fa-fw fa-columns"/>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePage" className="collapse" aria-labelledby="headingPage"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Example Pages</h6>
                                <a className="collapse-item" href="login.html">Login</a>
                                <a className="collapse-item" href="register.html">Register</a>
                                <a className="collapse-item" href="404.html">404 Page</a>
                                <a className="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area"/>
                            <span>Charts</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="version" id="version-ruangadmin"/>
                </ul>
            </>
        );
    }
}
