import React, { PropTypes, Component } from 'react'


export default class StopPoint extends Component {
    render() {
        return (
            <div>
                {this.props.stopPoint.name}
            </div>
        );
    }
}