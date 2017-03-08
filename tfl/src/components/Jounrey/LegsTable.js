import React, { PropTypes, Component } from 'react'
import Leg from './Leg'

export default class LegsTable extends Component {
    render() {
        const legs = this.props.legs
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Time
                        </th>
                        <th>
                            Mode
                        </th>

                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {legs.map((leg, index) =>
                        <Leg
                            key={index}
                            leg={leg}
                        >
                        </Leg>
                    )}
                </tbody>
            </table>
        );
    }
}