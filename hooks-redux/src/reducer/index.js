import { todoReducer } from "./todo-reducer";
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  todoReducer,
});
