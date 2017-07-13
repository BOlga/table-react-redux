import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeNavigationLinks extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/table'>Git repo</Link></li>
                    <li><Link to='/simple'>Simple page</Link></li>
                </ul>
            </nav>);
    }
}

