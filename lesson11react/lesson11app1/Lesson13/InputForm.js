import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = { textValue: "Ahmet AK" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ textValue: event.target.value });
    }
    handleSubmit(event) {
        alert("Text Item value: " + this.state.textValue)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" class="form-control"
                        name="" id="" value={this.state.textValue}
                        onChange={this.handleChange} />
                    <h1>{this.state.textValue}</h1>
                    <input type="submit" value="submit" />
                </div>
            </form>
        );
    }
}

export default InputForm; 