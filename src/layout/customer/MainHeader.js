import React, {Component} from 'react';
import Header from "./Header";
import {Provider} from "react-redux";
import {createStore} from "redux";
import userReducer from "../../modules/users/reducer/UserReducer";


class MainHeader extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(userReducer)}>
                <Header/>
                </Provider>
            </div>
        );
    }
}

export default MainHeader;