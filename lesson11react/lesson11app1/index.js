import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';


/*Open comment of specific application to explore details */

/*Hello World
ReactDOM.render( 
        <App/>  
        , document.getElementById('root'));
*/

/*lesson 13
  ReactDOM.render(
  <React.StrictMode>
    { <App name="My Second App" version="2">
    <p> One paragraph </p>
    <h1> One header </h1>
    <h2> One header </h2>
    </App> }
    <App14/>
  </React.StrictMode>,
  document.getElementById('root')
);*/


//App With routing

ReactDOM.render((
  <AppRouter/>
), document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
