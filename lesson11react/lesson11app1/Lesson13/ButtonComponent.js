import React, { Component } from 'react';

class ButtonComponent extends Component {
    
    displayMessage(){
        alert("Button clicked : "+this);
    }
    render() {
        return (
            <div>
                <button onClick={this.displayMessage}> Click Me </button>
            </div>
        );
    }
}

export default ButtonComponent;<button></button>