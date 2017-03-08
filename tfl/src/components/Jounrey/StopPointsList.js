import React, { PropTypes, Component } from 'react'
import StopPoint from './StopPoint'

export default class StopPointsList extends Component {

    render() {

        const stopPoints = this.props.stopPoints


        return (
            <div>
                {stopPoints.map((stopPoint, index) =>
                    <StopPoint
                        key={index}
                        stopPoint={stopPoint}
                    >
                    </StopPoint>)}
            </div>
        );
    }
}