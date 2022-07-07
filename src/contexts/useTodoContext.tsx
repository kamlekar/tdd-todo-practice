import React, { useState, createContext } from "react";

export type TodoItem = {
  text: string;
  completed?: boolean;
};
export type TodoListType = Array<TodoItem>;
export type FilterType = "all" | "active" | "completed";

// {
//   filter: 'all' | 'active' | 'completed',
//     setFilter: (filter: 'all' | 'active' | 'completed') => void,
//     todoList: TodoListType,
//     setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>,
// }
export type TodoListProviderValue = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  todoList: TodoListType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>;
};

// export type TodoListProviderValue = [
//   TodoListType,
//   React.Dispatch<React.SetStateAction<TodoListType>>
// ];

type TodoListContextProps = {
  children: React.ReactNode;
  value?: TodoListProviderValue;
};

const defaultProviderValue: TodoListProviderValue = {
  filter: "all",
  setFilter: () => {},
  todoList: [],
  setTodoList: () => {},
};
export const TodoListContext =
  createContext<TodoListProviderValue>(defaultProviderValue);

export const TodoListProvider = (props: TodoListContextProps) => {
  const { value = defaultProviderValue, children } = props;
  const [todoList, setTodoList] = useState<TodoListType>(value.todoList); // [todoList, setTodoList]
  const [filter, setFilter] = useState<FilterType>(value.filter); // [filter, setFilter]
  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
