import { combineReducers } from "redux";
import studentReducer from "./student-reducer";

export default combineReducers({
  studentStore: studentReducer,
});