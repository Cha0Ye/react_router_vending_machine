import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
    render() {
        return (
            <div>
                <img src="https://media2.giphy.com/media/l41m3g3u9aqiStOuY/giphy.gif" alt="Gross salty fish"/>
                <div>
                    <h1>Who would eat these things?</h1>
                    <p><Link to="/"> Get me outta here!</Link></p>
                </div>
                
            </div>
        );
    }
}

export default Sardines;