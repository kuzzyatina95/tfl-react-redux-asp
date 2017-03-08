import React, { PropTypes, Component } from 'react'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as arrivalsActions from '../actions/ArrivalsActions'

import ArrivalsList from '../components/Arrival/ArrivalsList'


class Arrivals extends Component {

    findArrivals() {
        const { setArrivals } = this.props.arrivalsActions

        setArrivals(this.refs.id.value)
    }

    render() {
        const arrivals = this.props.arrivals
        return (
            <div className="arrivals content-wrapper">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="idLine">ID Line</label>
                            <input type="text" className="form-control" ref='id' />
                            <button className="btn btn-success btn-block" onClick={this.findArrivals.bind(this)}> Find arrival </button>
                        </div>
                    </div>
                    <ArrivalsList arrivals={arrivals} />
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        arrivals: state.arrivals
    }
}

function mapDispatchToProps(dispatch) {
    return {
        arrivalsActions: bindActionCreators(arrivalsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrivals)
