import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import employeeReducer from "./employeeReducer.js";
import { reducer as formReducer } from 'redux-form'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    employeeReducer,
    form: formReducer
  })
  
const store=createStore(rootReducer, composedEnhancer);

export default store;