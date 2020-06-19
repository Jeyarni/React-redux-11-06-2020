import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction } from "../action/todo-action";
import { Card, Button } from "antd";

export default () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const todoTable = todos.map((todo) => {
    return (
      <tr key={todo.id}>
        <td>{todo.name}</td>
        <td>
          <Button onClick={() => dispatch(deleteTodoAction(todo.id))}>
            X
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div align="center">
      <Card size="large" title="Todo List" style={{ width: "50%" }}>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{todoTable}</tbody>
        </table>
      </Card>
    </div>
  );
};
