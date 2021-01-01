import React, { Component } from 'react';

class StatefullCounter extends Component {
    constructor(props) {
        super(props);
        this.state={counter:0};
        this.increaseBinded=this.increaseBinded.bind(this);
    }
    increaseBinded(){
        this.setState({counter:this.state.counter+1});
    }
    increase=()=>{
        this.setState({counter:this.state.counter+1});
    }

    decrease=()=>{
        this.setState({counter:this.state.counter-1});
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
               <button onClick={this.increase}>+</button> 
               <button onClick={this.decrease}>-</button> 
            </div>
        );
    }
}

export default StatefullCounter;