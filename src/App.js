import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import StudentList from "./components/student-list";

function App() {
  return (
    <Provider store={store}>
      <StudentList></StudentList>
    </Provider>
  );
}

export default App;
