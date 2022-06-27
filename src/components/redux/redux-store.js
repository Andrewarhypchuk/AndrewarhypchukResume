import {combineReducers, createStore} from "redux";
import ResumeReducer from "./resume-reducer";

let reducers =  combineReducers({
  resumeInfo : ResumeReducer
}
)

let store = createStore(reducers);
window.store = store;
export default store;