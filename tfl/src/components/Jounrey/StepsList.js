import React, { PropTypes, Component } from 'react'
import Step from './Step'

export default class StepsList extends Component {

    render() {

        const steps = this.props.steps


        return (
            <div>
                {steps.map((step, index) =>
                <Step
                    key={index}
                    step={step}
                >
                </Step>)}
            </div>
        );
    }
}