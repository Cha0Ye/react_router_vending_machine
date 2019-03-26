import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
// import Soda from './Soda';
// import Chips from './Chips';
// import Sardines from '/Sardines';
import NavBar from './NavBar';


class VendingMachine extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' render={ () => <Home /> } />
                        <Route exact path='/soda' render={ () => <Soda /> } />
                        <Route exact path='/chips' render={ () => <Chips /> } />
                        <Route exact path='/sardines' render={ () => <Sardines /> } />
                    </Switch >
                </BrowserRouter>
            </div>
        );
    }
}

export default VendingMachine;