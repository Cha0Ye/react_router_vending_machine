import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Soda extends Component {
    render() {
        return (
            <div>
                <img src="http://4.bp.blogspot.com/-tGTW4_ldi14/UXq5ipMO6UI/AAAAAAAACRI/7JImLR36gug/s1600/FANTA+003.gif" alt="So delicious though"/> 
                <div>
                    <h1>OMG SSSSUUUUUGAR</h1>
                    <p><Link to="/"> GO BAAAAACK</Link></p>

                </div>
            </div>
        );
    }
}

export default Soda;