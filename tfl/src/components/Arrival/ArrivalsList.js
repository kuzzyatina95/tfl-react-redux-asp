import React, { PropTypes, Component } from 'react'
import Arrival from './Arrival'

export default class ArrivalsList extends Component {
    render() {
        const arrivals = this.props.arrivals;
        return (
            <div>
                <ul>
                    {arrivals.map((arrival, index) =>
                        <Arrival
                            key={index}
                            lineName={arrival.lineName}
                            stationName={arrival.stationName}
                            destinationName={arrival.destinationName}
                            timeToStation={arrival.timeToStation}
                        ></Arrival>
                    )}
                </ul>
            </div>
        );
    }
}

ArrivalsList.propTypes = {
    arrivals: PropTypes.array.isRequired    
}