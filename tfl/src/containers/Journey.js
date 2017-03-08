import React, { PropTypes, Component } from 'react'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import Way from '../components/Jounrey/Way'
import * as journeyActions from '../actions/JourneyActions'

import Autocomplete from 'react-google-autocomplete'



class Journey extends Component {
    constructor() {
        super()
        this.state = {
            fromLat: '',
            fromLng: '',
            toLat: '',
            toLng: ''
        }

    }
    componentDidMount() {

    }


    findJourneys() {
        const { getJourneys } = this.props.journeyActions

        const {fromLat, fromLng, toLat, toLng} = this.state

        getJourneys(fromLat, fromLng, toLat, toLng)
    }

    render() {
        const journeys = this.props.journeys.journeys

        return (
            <div className="journey content-wrapper">

                <div className="container">
                    <div className="col-xs-12">
                        <p>For example from = Heathrow Airport Terminal 3, Longford, United Kingdom  To =  Headington, Oxford, United Kingdom</p>
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label htmlFor="from">From</label>
                                <Autocomplete
                                    className="form-control"
                                    onPlaceSelected={(place) => {
                                        this.setState({
                                            fromLat: place.geometry.location.lat(),
                                            fromLng: place.geometry.location.lng()
                                        });
                                        console.log(place);
                                    }}
                                    types={['geocode']}
                                    componentRestrictions={{ country: "uk" }}
                                />
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label htmlFor="to">to</label>
                                <Autocomplete
                                    className="form-control"
                                    onPlaceSelected={(place) => {
                                        this.setState({
                                            toLat: place.geometry.location.lat(),
                                            toLng: place.geometry.location.lng()
                                        });
                                        console.log(place);
                                    }}
                                    types={['geocode']}
                                    componentRestrictions={{ country: "uk" }}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success btn-block" onClick={this.findJourneys.bind(this)}>Plan My Jounrey</button>
                    </div>



                    {journeys.map((jounrey, index) =>
                        <Way
                            key={index}
                            jounrey={jounrey}
                        >
                        </Way>
                    )}
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        journeys: state.journeys
    }
}

function mapDispatchToProps(dispatch) {
    return {
        journeyActions: bindActionCreators(journeyActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journey)
