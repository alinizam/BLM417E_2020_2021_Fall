import React, { Component } from 'react';
import { connect } from "react-redux";
class Counter extends Component {
    render() {
        return (
            <div>
                
                <button onClick={this.props.inc}>Increase</button>
                <button onClick={this.props.dec}>Decrease</button>
                <h1> Sonuç = {this.props.localState.counter} </h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        localState: state
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        inc: () => {
            dispatch({ type: "ADD", counter: 0 })
        },
        dec: () => {
            dispatch({ type: "SUBSTRACT", counter: 0 })
        }
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);