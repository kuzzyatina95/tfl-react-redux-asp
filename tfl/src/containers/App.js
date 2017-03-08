import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class App extends Component {


    render() {
        return (
            <div >
                <Header />
                <main className="cd-main-content">
                    <Sidebar />
                    {this.props.children}
                </main>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)