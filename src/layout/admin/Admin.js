import React, {Component} from 'react';
import AdminSidebar from "./navigation/AdminSidebar";
import $ from "jquery";

class Admin extends Component {

    handleButtonToggled(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
    };

    render() {
        return (
            <>
                <AdminSidebar/>
            </>
        );
    }
}

export default Admin;
