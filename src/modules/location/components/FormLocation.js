import React, {Component} from 'react';
import Map from "./Map";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux";
import CombineReducer from "../../../helper/CombineReducer";
class FormLocation extends Component {

    render() {
        return (
            <>
                                    <Provider store={createStore(CombineReducer)}>
                                    <Map
                                        google={this.props.google}
                                        center={{lat: 18.5204, lng: 73.8567}}
                                        height='300px'
                                        zoom={15}
                                    />

                                    </Provider>

            </>
        );
    }



}

const mapsStateToProps = (state) => {
    return {...state}
}
export default connect(mapsStateToProps) (FormLocation);
