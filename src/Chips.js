import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Chips extends Component {
    render() {
        return (
            <div>
               
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTk32kLWmHR3u0OcDj0k6LHk6-A9QZmD0aR3xuplkxAqQLo9Pwg" alt="CRUNCHY nom nom nom" />
                <div>
                    <h1>SPICY Chips...OMG</h1>
                    <p><Link to="/"> Burp, GO BAAAAACK</Link></p>

                </div>
            </div>
        
        );
    }
}

export default Chips;