import React from "react";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";

export const Todo = () => {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};
