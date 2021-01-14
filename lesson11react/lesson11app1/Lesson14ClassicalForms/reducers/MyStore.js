import {createStore, combineReducers} from "redux";
import TodoReducer from "./TodoReducer.js";
import { reducer as formReducer } from 'redux-form'
import account from './MyTypes'

const rootReducer = combineReducers({
    TodoReducer,
    account,
    form: formReducer
  })
  
const store=createStore(rootReducer);

export default store;





