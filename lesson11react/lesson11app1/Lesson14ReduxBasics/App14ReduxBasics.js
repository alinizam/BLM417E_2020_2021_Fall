import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './reducers/MyStore';

class App14ReduxBasics extends Component {
     
    render() {
        return(
            <div>
                <Provider store={store}>
                    <Counter/>
                </Provider>
            </div>
        );
    }
}


export default App14ReduxBasics;