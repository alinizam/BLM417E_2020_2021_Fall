import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p> 
                <p>{this.props.version}</p>
                <p>{this.props.releaseYear}</p>   
            </div>
        );
    }
}
    
export default AppComponent;