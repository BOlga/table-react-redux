import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Table from './Table.js';
import HomePage from './HomePage.js';
import AnotherPage from './AnotherPage.js';

export default class HomeSwitch extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/table' component={Table} />
                <Route path='/simple' component={AnotherPage} />
            </Switch>);
    }
}
