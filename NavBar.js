import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// Navigation component to get different products from the
// vending machine.
class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/soda">Soda</NavLink>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/sardines">Fresh Sardines</NavLink>
            </nav>
        );
    }
}

export default NavBar;