import React from "react";
import { TodoListContext } from "../../contexts/useTodoContext";

export const TodoList = () => {
  const [todoList, setTodoList] = React.useContext(TodoListContext);

  return (
    <>
      {todoList.map((todo, i) => (
        <label key={i} data-testid="todo-list-item">
          <input type="checkbox" />
          <span>{todo.text}</span>
        </label>
      ))}
    </>
  );
};
