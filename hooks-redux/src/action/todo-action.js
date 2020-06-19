import { ADD_TODO, DELETE_TODO } from "./type";

export const addTodoAction = (todos) => ({
  type: ADD_TODO,
  payload: todos,
});
export const deleteTodoAction = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});
