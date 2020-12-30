import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  const {appName}=props;
  return (
    <div className="App">
      <p>{appName}</p>
      <p>Hello World</p> 
    </div>
  );
}

export default App;
