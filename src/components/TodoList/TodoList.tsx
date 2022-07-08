import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import { TodoItem, TodoListContext } from "../../contexts/useTodoContext";

export const TodoList = () => {
  const { todoList, setTodoList, filter } = React.useContext(TodoListContext);

  const isVisible = (item: TodoItem) => {
    console.log(filter);
    switch (filter) {
      case "active":
        return !item.completed;
      case "completed":
        return item.completed;
      default:
        return true;
    }
  };

  const onItemChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    item: TodoItem
  ) => {
    const isChecked = e.currentTarget.checked;

    const updatedTodoList = todoList.map((todoItem, index) => {
      if (todoItem === item) {
        return {
          ...todoItem,
          completed: isChecked,
        };
      }
      return todoItem;
    });

    setTodoList([...updatedTodoList]);
  };

  return (
    <>
      {todoList
        .filter((todo) => isVisible(todo))
        .map((todo, i) => (
          <label key={i} data-testid="todo-list-item">
            <input
              type="checkbox"
              onChange={(e) => onItemChangeHandler(e, todo)}
            />
            <span>{todo.text}</span>
          </label>
        ))}
    </>
  );
};
