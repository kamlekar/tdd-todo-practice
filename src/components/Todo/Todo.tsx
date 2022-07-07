import React from "react";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoListProvider } from "../../contexts/useTodoContext";
import { TodoInput } from "../TodoInput/TodoInput";

export const Todo = () => {
  return (
    <TodoListProvider>
      <div>
        <TodoHeader />
        <TodoInput />

        <TodoFooter />
      </div>
    </TodoListProvider>
  );
};
