import React, { PropTypes, Component } from 'react'
import StepsList from './StepsList'

export default class Steps extends Component {
    constructor() {
        super();
        this.state = {
            showStepsListComponent: false,
        };
    }

    showStepslistComponentClick() {
        if (this.state.showStepsListComponent === false) {
            this.setState({ showStepsListComponent: true });
        }
        if (this.state.showStepsListComponent === true) {
            this.setState({ showStepsListComponent: false });
        }
    }

    render() {
        const steps = this.props.steps
        const textDirectionsComponent = <a onClick={this.showStepslistComponentClick.bind(this)}>View text directions</a>

        return (
            <div>
                {steps.length > 0 ? textDirectionsComponent : null}
                {this.state.showStepsListComponent ? <StepsList steps={steps}/> : null}
            </div>
        )
    }
}