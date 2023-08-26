import React from "react";
import TodoList from "./TodoList";
import "./App.css";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        flexShrink: 1,
      }}
    >
      <TodoList />
    </div>
  );
};
export default App;
