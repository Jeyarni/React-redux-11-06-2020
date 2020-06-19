import React, { useState } from "react";
import { addTodoAction } from "../action/todo-action";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Input, Card, Button } from "antd";

export default () => {
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodoAction({ id: uuid(), name: todo }));
  };

  return (
    <div align="center">
      <Card size="large" title="Add Todo" style={{ width: "50%" }}>
        <Input type="text" name="todo" value={todo} onChange={handleChange} /><br /><br />
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Card>
    </div>
  );
};
