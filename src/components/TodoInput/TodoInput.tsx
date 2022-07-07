import React, { useContext, KeyboardEventHandler } from "react";
import { TodoListContext } from "../../contexts/useTodoContext";

export const TodoInput = () => {
  const [todoList, setTodoList] = useContext(TodoListContext);
  const appendTodoList = (listItem: string) => {
    const newTodoList = [...todoList];
    newTodoList.push({ text: listItem, status: "Active" });
    setTodoList([...newTodoList]);
  };
  const addTodoListItem: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputElement: HTMLInputElement = e.currentTarget;
      const todoText = inputElement.value.trim();
      inputElement.value = "";
      console.log(todoText);

      if (todoText) appendTodoList(todoText);
    }
  };
  return (
    <div>
      <input type="text" onKeyDown={addTodoListItem} />
    </div>
  );
};
