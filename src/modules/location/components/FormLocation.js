import React, {Component} from 'react';
class ListLocation extends Component {

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
