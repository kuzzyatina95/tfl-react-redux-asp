import React, { PropTypes, Component } from 'react'
import Steps from './Steps'
import StopPoints from './StopPoints'

export default class LegsDetails extends Component {
    render() {
        const legs = this.props.legs
        return <div>
            {legs.map((leg, index) =>
                <div key={index}>
                    <div>
                        <p>{leg.duration} mins</p>
                        <p>{leg.instruction.summary}</p>
                    </div>
                    <Steps  steps={leg.instruction.steps} />
                    <StopPoints stopPoints={leg.path.stopPoints} />
                </div>
            )}
        </div>
    }
}