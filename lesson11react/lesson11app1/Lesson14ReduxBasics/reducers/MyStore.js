import {createStore} from "redux";
import reducer from "./TodoReducer.js";

const store=createStore(reducer);

export default store;

