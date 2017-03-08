import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="cd-side-nav">
                <ul>
                    <li className="cd-label">Main</li>
                    <li className="has-children overview">
                        <IndexLink to="/" activeClassName="active" className="item">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i> &nbsp;Home
                        </IndexLink>
                        <Link activeClassName="active" className="item" to="/journey">
                            <i className="fa fa-book fa-lg" aria-hidden="true"></i>&nbsp;Journey
                        </Link>
                        <Link activeClassName="active" className="item" to="/arrivals">
                            <i className="fa fa-book fa-lg" aria-hidden="true"></i>&nbsp;Arrivals
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}