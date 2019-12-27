import React, {Component} from 'react';
import Map from "./Map";
class FormLocation extends Component {

    render() {
        return (
            <>
                <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Form Location</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div style={{ margin: '100px' }}>
                                    <Map
                                        google={this.props.google}
                                        center={{lat: 18.5204, lng: 73.8567}}
                                        height='300px'
                                        zoom={15}
                                    />
                                </div>
                                <br/>
                                <br/>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save Location</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FormLocation;
