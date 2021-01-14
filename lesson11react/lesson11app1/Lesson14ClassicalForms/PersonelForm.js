import React, { Component } from 'react';
import axios from 'axios';

class PersonelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empInfo: {
                personelId: NaN,
                firstName: "",
                lastName: "",
                salary: NaN,
                departmentId: NaN,
                jobId: NaN
            }
        };
    }


    handleChange = e => {
        let { name, value } = e.target
        if (typeof(this.state.empInfo[name])==='number'){
            value=parseInt(value)
        }
        this.setState({
            empInfo: { ...this.state.empInfo, [name]: value }
        });
        console.log(this.state);
    }
    onCreateEmployee = () => {

        const URL = 'https://localhost:44344/api/Employees';
        
        axios(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data:  this.state.empInfo
            })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
        /* fetch('https://localhost:44344/api/Employee', {
             method: 'POST',
             headers: { 'Content-type': 'application/json' },
             body: this.state.empInfo
         }).then(r => r.json()).then(res => {
             if (res) {
                 this.setState({ message: 'New Employee is Created Successfully' });
             }
         });*/

    }

    render() {
        return (
            <div>
                <h2>Please Enter Employee Details...</h2>
                <p>
                    <label>Employee ID : <input type="text"
                        name='personelId'
                        onChange={this.handleChange}></input></label>
                </p>
                <p>
                    <label>Employee Name : <input type="text"
                        name='firstName'
                        onChange={this.handleChange}></input></label>
                </p>
                <p>
                    <label>Employee Last Name : <input type="text"
                        name='lastName'
                        onChange={this.handleChange}></input></label>
                </p>
                <p>
                    <label>Employee Salary : <input type="text"
                        name='salary'
                        onChange={this.handleChange}></input></label>
                </p>
                <p> <label>Employee Department ID : <input type="text"
                        name='departmentId'
                        onChange={this.handleChange}></input></label>
                </p>
                <p> <label>Employee Job ID : <input type="text"
                        name='jobId'
                        onChange={this.handleChange}></input></label>
                </p>
                <button onClick={this.onCreateEmployee}>Create</button>
            </div>
        )
    }
}

export default PersonelForm;