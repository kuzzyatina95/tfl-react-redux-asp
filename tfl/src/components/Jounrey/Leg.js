import React, { PropTypes, Component } from 'react'

export default class Leg extends Component {
    render() {
        const leg = this.props.leg

        var mode = '';

        switch (leg.mode.name) {
            case 'tube':
                mode = <i className="fa fa-train" aria-hidden="true"></i>;
                break;
            case 'walking':
                mode = <i className="fa fa-male" aria-hidden="true"></i>;
                break;
            case 'bus':
                mode = <i className="fa fa-bus" aria-hidden="true"></i>;
                break;
            default:
                mode = leg.mode.name;
                break;
        }

        return (
            <tr>
                <td>
                    {leg.duration} mins
                        </td>
                <td>
                    {mode}
                </td>
                <td>
                    {leg.instruction.summary}
                </td>
            </tr>
        );
    }
}