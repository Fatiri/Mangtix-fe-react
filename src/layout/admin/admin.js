import React, {Component} from 'react';
import $ from "jquery";

class Admin extends Component {
    function(e) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        // if ($('.sidebar').hasClass('toggled')) {
        //     $('.sidebar .collapse').collapse('hide');
        // };
    };
    render() {
        return (
            <div id="wrapper">

            </div>
        );
    }
}

export default Admin;
