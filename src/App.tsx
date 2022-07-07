import React from "react";
import "./App.css";
import { TodoListProvider } from "./contexts/useTodoContext";
import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <TodoListProvider>
      <Todo />
    </TodoListProvider>
  );
}

export default App;
