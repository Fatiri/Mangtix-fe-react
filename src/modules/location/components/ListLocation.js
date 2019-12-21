import React, {Component} from 'react';
import '../../../helper'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class ListLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:{
                lat :"" ,
                long:"",
            }, stores: [{name:"", lat: -6.301253, lng: 106.820215},
        {name:"Ragunan", latitude:  -6.36379, longitude: 106.732082},
        {name:"Depok", latitude: -6.40144 , longitude: 106.790104},
        {name:"Ragunan Samping", latitude: -6.379041, longitude: 106.884174},
        {name:"Ragunan belakang", latitude:  -6.419079, longitude: 106.964855},
        {name:"yoooooooo", latitude: -6.479582, longitude: 107.053776}
        ],
        error: null,
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        value: {lat:position.coords.latitude, long:position.coords.longitude},
                        error: null,
                    });
                    console.log(this.state.value);
                },
                (error) => this.setState(
                    {error: error.message}
                )
            );
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                           onClick={() => alert(store.name)} />
        })
    }

    render() {
        return (
            <>
                <div class="col-lg-12">
                    <div class="card mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Location</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <Map google={this.props.google}
                                    zoom={5}
                                    initalCenter={{ lat: -6.479582, lng: 107.053776}}>
                                    {this.displayMarkers()}
                                </Map>

                            </div>
                            <hr/>
                            HAahahahahha
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Detail Location Event</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar">
                                <canvas id="myBarChart"></canvas>
                            </div>
                            <hr/>
                            Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Event active</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-pie pt-4">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <hr/>
                            Styling for the donut chart can be found in
                            the <code>/js/demo/chart-pie-demo.js</code> file.
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ListLocation;
