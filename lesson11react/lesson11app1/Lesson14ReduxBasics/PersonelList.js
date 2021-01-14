import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';

class PersonelList extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentDidMount() {
       /*fetch("https://localhost:44344/api/Employees")
            .then(response => response.json())
            .then(data => {
                const employees = data;
                console.log(employees);
                this.setState({ employees });
            });*/
            axios.get(`https://localhost:44344/api/Employees`)
            .then(res => {
              const person = res.data;
              console.log(person);
              this.setState({ employees:person });
            });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.employees.map(person => <li key={person.personelId}>{person.firstName}</li>)}
                </ul>
            </div>
        );
    }
}

export default PersonelList;