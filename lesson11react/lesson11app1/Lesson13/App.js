import React, { Component } from 'react';
import AppFunction from "./AppFunction"
import AppComponent from "./AppComponent"
import ButtonComponent from './ButtonComponent';
import StatefullCounter from './StatefullCounter';
import StateFullCounterHook from './StateFullCounterHook';
import InputForm from './InputForm';

class App extends Component {
    render() {
        const releaseYear=2020;
        return (
            <div>
                <p>Hello World App</p>
                <InputForm/>
                <StateFullCounterHook/>
                <StatefullCounter/>
                <ButtonComponent/>
                <AppComponent name="My First Class Component" 
                  version="1.0"
                  releaseYear={releaseYear}>
                </AppComponent>
                <AppFunction name="My First Functional Component" 
                  version="1.0"/> 
                  {this.props.children}
                  {React.Children.count(this.props.children)}
            </div>
        );
    }
}

export default App; 