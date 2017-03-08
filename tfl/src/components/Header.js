import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <header className="cd-main-header">
                <a href="#0" className="cd-logo"></a>
                <div className="cd-search">
                    <form action="#0">
                        <input type="search" placeholder="Search..." />
                    </form>
                </div>
                <a href="#0" className="cd-nav-trigger">Menu<span></span></a>
                <nav className="cd-nav">
                    <ul className="cd-top-nav">
                        <li><a href="#0">Tour</a></li>
                        <li><a href="#0">Support</a></li>
                        <li className="has-children account">
                            <a href="#0">
                                Account
					        </a>
                            <ul>
                                <li><a href="#0">My Account</a></li>
                                <li><a href="#0">Edit Account</a></li>
                                <li><a href="#0">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                header
            </header>
        );
    }
}