import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {createStore} from "redux";
import userReducer from "../../modules/users/reducer/UserReducer";
import AdminNavBar from "./AdminNavBar";


class MainAdminNavbar extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(userReducer)}>
              <AdminNavBar/>
                </Provider>
            </div>
        );
    }
}

export  default MainAdminNavbar;