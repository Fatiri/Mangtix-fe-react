import React, {Component} from 'react';
import Map from "./MapRegistrationLocation";
import {connect} from "react-redux";

class FormLocationRegistration extends Component {

    render() {
        return (
            <>
                    <Map
                        google={this.props.google}
                        center={{lat: 18.5204, lng: 73.8567}}
                        height='300px'
                        zoom={15}
                    />
            </>
        );
    }

}

const mapsStateToProps = (state) => {
    return {...state}
}
export default connect(mapsStateToProps)(FormLocationRegistration);
