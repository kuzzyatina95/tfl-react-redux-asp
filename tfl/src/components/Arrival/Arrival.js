import React, { PropTypes, Component } from 'react'

export default class Arrival extends Component {
    render() {
        const { lineName, stationName, destinationName, timeToStation } = this.props;
        var convertTime = parseInt(timeToStation/60)
        convertTime < 1 ? convertTime = "due" : convertTime = convertTime + " min"
        return (
            <li>
                {lineName} {stationName} {destinationName} {convertTime}
            </li>
        );
    }
}

