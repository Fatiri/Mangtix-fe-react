import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import {connect, Provider} from "react-redux";
import {locationAddress, locationCity, locationLatitude, locationLongitude} from "../LocationAction";
import {saveDataLocation} from "../service/LocationServices";
import registrationReducer from "../../register/reducer/RegistrationReducer";

Geocode.setApiKey("AIzaSyB7jbVjgBd0Ueyn49tj0Zzgp0EsRrHwJgQ");
Geocode.enableDebug();

class MapRegistrationLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            area: '',
            state: '',
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }

    componentDidMount() {
        Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);

                console.log('city', city, area, state);

                this.state.address = (address) ? address : '';
                this.state.area = (area) ? area : '';
                this.state.city = (city) ? city : '';
                this.state.state = (state) ? state : '';
            },
            error => {
                console.error(error);
            }
        );
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if (this.props.center.lat === nextProps.center.lat) {
            return false
        }
    }

    getCity = (addressArray) => {
        let city = '';
        if (!(addressArray === undefined)) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                    city = addressArray[i].long_name;
                    return city;
                }
            }
        } else {
            alert("LOcation Not FOund")
        }


    };

    getArea = (addressArray) => {
        let area = '';
        if (!(addressArray === undefined)) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0]) {
                    for (let j = 0; j < addressArray[i].types.length; j++) {
                        if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                            area = addressArray[i].long_name;
                            return area;
                        }
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        if (!(addressArray === undefined)) {
            for (let i = 0; i < addressArray.length; i++) {
                for (let i = 0; i < addressArray.length; i++) {
                    if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                        state = addressArray[i].long_name;
                        return state;
                    }
                }
            }
        }
    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onInfoWindowClose = (event) => {

    };

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);


                this.state.address = (address) ? address : '';
                this.state.area = (area) ? area : '';
                this.state.city = (city) ? city : '';
                this.state.state = (state) ? state : '';
                this.state.markerPosition.lat = newLat;
                this.state.markerPosition.lng = newLng;

                this.state.mapPosition.lat = newLat;
                this.state.mapPosition.lng = newLng;
            },
            error => {
                console.error(error);
            }
        );
    };


    onPlaceSelected = (place) => {

        console.log(place)
        const address = place.formatted_address;
        const addressArray = place.address_components;
        const city = this.getCity(addressArray);
        const area = this.getArea(addressArray);
        const state = this.getState(addressArray);
        if (!(place.geometry === undefined)) {
            const latValue = place.geometry.location.lat();
            const lngValue = place.geometry.location.lng();
            this.state.markerPosition.lat = latValue;
            this.state.markerPosition.lng = lngValue;
            this.state.mapPosition.lat = latValue;
            this.state.mapPosition.lng = lngValue;
            this.props.dispatch({...locationLatitude, latitude: latValue})
            this.props.dispatch({...locationLongitude, longitude: lngValue})
        }

        this.state.address = (address) ? address : '';
        this.state.area = (area) ? area : '';
        this.state.city = (city) ? city : '';
        this.state.state = (state) ? state : '';


        this.props.dispatch({...locationAddress, address: address})
        this.props.dispatch({...locationCity, city: city})

        console.log(this.props.location)


    };

    render() {

        console.log(this.state)
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                               defaultZoom={this.props.zoom}
                               defaultCenter={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
                    >
                        {/* InfoWindow on top of marker */}
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{
                                lat: (this.state.markerPosition.lat + 0.0018),
                                lng: this.state.markerPosition.lng
                            }}
                        >
                            <div>
                                <span style={{padding: 0, margin: 0}}>{this.state.address}</span>
                            </div>
                        </InfoWindow>
                        {/*Marker*/}
                        <Marker google={this.props.google}
                                name={'Dolores park'}
                                draggable={true}
                                onDragEnd={this.onMarkerDragEnd}
                                position={{lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng}}
                        />
                        <Marker/>
                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '500px'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        />
                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>
                <div className="form-group">
                    <label htmlFor="">Choose Location</label>
                    <AsyncMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7jbVjgBd0Ueyn49tj0Zzgp0EsRrHwJgQ&libraries=places"
                        loadingElement={
                            <div style={{height: `100%`}}/>
                        }
                        containerElement={
                            <div style={{height: this.props.height}}/>
                        }
                        mapElement={
                            <div style={{height: `100%`}}/>
                        }
                    />
                    <br/>
                    <br/>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="">City</label>
                        <input type="text" name="city" className="form-control" onChange={this.onChange}
                               readOnly="readOnly" value={this.state.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Area</label>
                        <input type="text" name="area" className="form-control" onChange={this.onChange}
                               readOnly="readOnly" value={this.state.area}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">State</label>
                        <input type="text" name="state" className="form-control" onChange={this.onChange}
                               readOnly="readOnly" value={this.state.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" className="form-control" onChange={this.onChange}
                               readOnly="readOnly" value={this.state.address}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit"
                                data-toggle="collapse"
                                data-target="#collapseExample" aria-expanded="false"
                                aria-controls="collapseExample" onClick={this.handleSubmitLocation}>
                            Save Location
                        </button>
                    </div>
                </div>


            </div>
        } else {
            map = <div style={{height: this.props.height}}/>
        }
        return (map)
    }

    handleSubmitLocation = async () => {
        const dataLocation = {...this.props.location}
        console.log(dataLocation.latitude)
        if (!(this.state.markerPosition.lat===""|| this.state.markerPosition.lng==="")){
            const dataPostLocation = await saveDataLocation(dataLocation);
            console.log(dataPostLocation,"ini location")
            this.props.userInfo.locationIdTransient = dataPostLocation.id;
            console.log(this.props.userInfo.locationIdTransient)
        }else {
            alert("location must be choose")
        }

    }
}

const mapsStateToProps = (state) => {
    return {...state}
}
export default connect(mapsStateToProps)(MapRegistrationLocation);
