import React, { Component } from 'react';
import {Provider} from "react-redux";
import MyStore from './reducers/MyStore'
import PersonelForm from './PersonelForm';
class App14ClassicalForms extends Component {
    render() {
        return (
            <div>
                <Provider store={MyStore}>
                <PersonelForm/>
                </Provider>
            </div>
        );
    }
}

export default App14ClassicalForms; 