import React, { useState, createContext } from "react";

export type TodoItem = {
  text: string;
  completed?: boolean;
};
export type TodoListType = Array<TodoItem>;

// {
//   filter: 'all' | 'active' | 'completed',
//     setFilter: (filter: 'all' | 'active' | 'completed') => void,
//     todoList: TodoListType,
//     setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>,
// }
// export type TodoListProviderValue = {
//   filter: "all" | "active" | "completed";
//   setFilter: (filter: "all" | "active" | "completed") => void;
//   todoList: TodoListType;
//   setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>;
// }

export type TodoListProviderValue = [
  TodoListType,
  React.Dispatch<React.SetStateAction<TodoListType>>
];

type TodoListContextProps = {
  children: React.ReactNode;
  value?: TodoListProviderValue;
};

const defaultProviderValue: TodoListProviderValue = [[], () => {}];
export const TodoListContext =
  createContext<TodoListProviderValue>(defaultProviderValue);

export const TodoListProvider = (props: TodoListContextProps) => {
  const { value = [[]], children } = props;
  const TodoListState = useState<TodoListType>(value[0]); // [todoList, setTodoList]
  return (
    <TodoListContext.Provider value={TodoListState}>
      {children}
    </TodoListContext.Provider>
  );
};
