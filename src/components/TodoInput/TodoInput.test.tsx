import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoInput } from "./TodoInput";
import {
  TodoListContext,
  TodoListProvider,
  TodoListProviderValue,
  TodoListType,
} from "../../contexts/useTodoContext";

const mockTodoList: TodoListType = [
  {
    text: "test",
    completed: false,
  },
];

const mockTodoListProviderValue: TodoListProviderValue = {
  todoList: mockTodoList,
  setTodoList: () => {},
  filter: "all",
  setFilter: () => {},
};
const renderComponent = (
  value: TodoListProviderValue = mockTodoListProviderValue
) => {
  render(
    <TodoListProvider value={value}>
      <TodoInput />
    </TodoListProvider>
  );
};

describe("Todo", () => {
  it("renders", () => {
    renderComponent();
  });

  it("clears input on Enter key press, when some value is added", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(inputElement.value).toBe("");
  });

  it("clears input on Enter key press, when no value is added", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(inputElement.value).toBe("");
  });

  it("clears input on Enter key press, when only spaces are added", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "   " } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(inputElement.value).toBe("");
  });
});
