import React, { PropTypes, Component } from 'react'

import LegsTable from './LegsTable'
import LegsDetails from './LegsDetails'


export default class Way extends Component {
    constructor() {
        super();
        this.state = {
            showComponentDetailsOrTable: false,
        };
    }

    showDetailsClick() {
        if (this.state.showComponentDetailsOrTable === false) {
            this.setState({ showComponentDetailsOrTable: true });
        }
        if (this.state.showComponentDetailsOrTable === true) {
            this.setState({ showComponentDetailsOrTable: false });
        }
    }

    render() {
        const jounrey = this.props.jounrey
        return (
            <div className="Way">
                <div className="col-xs-3">
                    <p>
                        duration {jounrey.duration} mins
                    </p>

                    <button className="btn btn-default" onClick={this.showDetailsClick.bind(this)}>Show / hide </button>
                </div>
                <div className="col-xs-9">
                    {this.state.showComponentDetailsOrTable ? <LegsDetails legs={jounrey.legs}/> : <LegsTable legs={jounrey.legs} />}
                </div>
            </div>
        );
    }
}