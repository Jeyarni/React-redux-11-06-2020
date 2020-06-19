import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <br /><br/><br/>
      <TodoInput></TodoInput>
      <br />
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
