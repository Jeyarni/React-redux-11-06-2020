import { ADD_TODO, DELETE_TODO } from "../action/type";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    { id: uuid(), name: "React JS is a JavaScript library", complete: false },
    { id: uuid(), name: " It is maintained by Facebook", complete: false },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
