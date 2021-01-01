import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ClassComp from "./ClassComp.js";
import AppFunction from './Lesson13/AppFunction';

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
