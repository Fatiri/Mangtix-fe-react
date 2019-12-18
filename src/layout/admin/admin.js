import React, {Component} from 'react';
import Adminsidebar from "./adminsidebar";
import AdminContent from "./adminContent";
import $ from "jquery";

class Admin extends Component {

    handleButtonToggled(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
    };

    render() {
        return (
            <div id="wrapper">
                <Adminsidebar/>
                <AdminContent/>
            </div>
        );
    }
}

export default Admin;
