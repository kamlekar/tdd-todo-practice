import React, { useState, createContext } from "react";

export type TodoItem = {
  text: string;
  status: "Completed" | "Active";
};
export type TodoListType = Array<TodoItem>;
export type TodoListProviderValue = [
  TodoListType,
  React.Dispatch<React.SetStateAction<TodoListType>>
];

type TodoListContextProps = {
  children: React.ReactNode;
  value?: TodoListProviderValue;
};
export const TodoListContext = createContext<TodoListProviderValue>([
  [],
  () => {},
]);

export const TodoListProvider = (props: TodoListContextProps) => {
  const { value = [[]], children } = props;
  const TodoListState = useState<TodoListType>(value[0]); // [todoList, setTodoList]
  return (
    <TodoListContext.Provider value={TodoListState}>
      {children}
    </TodoListContext.Provider>
  );
};
