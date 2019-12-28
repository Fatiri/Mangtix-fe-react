import React, {Component} from 'react';

class MapRegistrationLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=10&t=5&poitxs=16&poitxc=black&poifc=yellow',
            points: [],
        }
    }

    getPOIList() {
        if (this.state.points.length > 0) {
            let param = '&poi=';
            for (var poi in this.state.points) {
                param += poi.latitude + ',' + poi.longitude;
            }
            return param;
        }

        return '';
    }

    // Render method builds the URL dynamically to fetch the image from the
    // HERE MapRegistrationLocation Image API

    render() {
        return (
            <div>
                <img
                    src={ this.state.url
                    + '&app_id=' + this.props.app_id
                    + '&app_code=' + this.props.app_code
                    + this.getPOIList()
                    }
                    alt="Todo MapRegistrationLocation"/>
            </div>
        );
    }
}

export default MapRegistrationLocation;
