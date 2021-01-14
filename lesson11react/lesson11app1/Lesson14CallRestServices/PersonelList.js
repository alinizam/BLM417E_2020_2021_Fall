import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    /*axios.get(`https://localhost:44344/api/Employees`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })*/
      /*fetch("https://localhost:44344/api/Employees")
      .then(response => response.json())
      .then(response => {
        const persons = response.data;
        this.setState({ persons });
        }) ;*/
        fetch("https://localhost:44344/api/Employees").
        then(response => response.json()).
        then(data => {
            const persons = data;
            this.setState({ persons });
            });
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.personelId}>{person.firstName}</li>)}
      </ul>
    )
  }
}