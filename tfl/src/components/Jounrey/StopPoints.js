import React, { PropTypes, Component } from 'react'
import StopPointsList from './StopPointsList'

export default class StopPoints extends Component {
    constructor() {
        super();
        this.state = {
            showStopPointsListComponent: false,
        };
    }


    showStopPointsListComponentClick() {
        if (this.state.showStopPointsListComponent === false) {
            this.setState({ showStopPointsListComponent: true });
        }
        if (this.state.showStopPointsListComponent === true) {
            this.setState({ showStopPointsListComponent: false });
        }
    }


    render() {
        const stopPoints = this.props.stopPoints
        const allStopsComponent = <a onClick={this.showStopPointsListComponentClick.bind(this)}>All stop</a>

        return (
            <div>
                {stopPoints.length > 0 ? allStopsComponent : null}
                {this.state.showStopPointsListComponent ? <StopPointsList stopPoints={stopPoints} /> : null}
            </div>
        );
    }
}