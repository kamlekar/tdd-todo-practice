import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";
import { TodoListProvider, TodoListType } from "../../contexts/useTodoContext";

const mockTodoList: TodoListType = [
  {
    text: "test",
    completed: false,
  },
];
const renderComponent = () => {
  render(
    <TodoListProvider value={[mockTodoList, () => {}]}>
      <TodoList />
    </TodoListProvider>
  );
};

describe("TodoList", () => {
  it("renders", () => {
    renderComponent();
  });

  it("stores completed as true when checked todo list item is checked", () => {
    renderComponent();
    const todoListItem: HTMLInputElement = screen.getByRole("checkbox");
    fireEvent.click(todoListItem);
    expect(todoListItem.checked).toBeTruthy();
  });
});
