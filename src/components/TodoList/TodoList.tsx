import React from "react";
import { TodoItem, TodoListContext } from "../../contexts/useTodoContext";

export const TodoList = () => {
  const [todoList] = React.useContext(TodoListContext);

  const isVisible = (item: TodoItem) => {
    return item.status;
  };

  return (
    <>
      {todoList.map((todo, i) => (
        <div key={i} data-testid="todo-list-item">
          {todo.text}
        </div>
      ))}
    </>
  );
};
