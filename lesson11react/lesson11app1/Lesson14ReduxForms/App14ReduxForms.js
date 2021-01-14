import React, { Component } from 'react';
import {Provider} from "react-redux";
import SimpleForm from './SimpleForm';
import MyStore from './reducers/MyStore'
import InitializeFromStateForm from './InitializeFromStateForm';
class App14ReduxForms extends Component {
    render() {
        const releaseYear=2020;
        return (
            <div>
                <Provider store={MyStore}>
                 <InitializeFromStateForm/>
                 </Provider>
            </div>
        );
    }
}

export default App14ReduxForms; 