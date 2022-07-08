import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Todo } from "./Todo";
import { TodoListProvider } from "../../contexts/useTodoContext";

const renderComponent = () => {
  render(
    <TodoListProvider>
      <Todo />
    </TodoListProvider>
  );
};

describe("Todo", () => {
  it("renders header", () => {
    renderComponent();
    const linkElement = screen.getByText("Todo");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders input", () => {
    renderComponent();
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders todo footer", () => {
    renderComponent();
    const footerElements = screen.getAllByRole("radio");
    expect(footerElements.length === 3).toBeTruthy();
  });

  it("should update the context todo list, when enter is pressed with some content in it", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });

    const todoListItems = screen.getAllByTestId("todo-list-item");
    const listItem = todoListItems[0];

    expect(listItem.textContent).toEqual("test");
  });

  it("ignores input on Enter key press, when no value is added", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.keyDown(inputElement, { key: "Enter" });
    const todoListItems = screen.queryAllByTestId("todo-list-item");
    expect(todoListItems.length).toBe(0);
  });

  it("ignores input on Enter key press, when only spaces are added", () => {
    renderComponent();
    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "   " } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    const todoListItems = screen.queryAllByTestId("todo-list-item");
    expect(todoListItems.length).toBe(0);
  });

  // it('should update the context todo list, when "All" is selected', () => {
  //   renderComponent();
  //   const completedRadioElement = screen.getByLabelText("All");
  //   fireEvent.click(completedRadioElement);
  //   const todoListItems = screen.queryAllByTestId("todo-list-item");
  //   expect(todoListItems.length).toBe(0);
  // });

  // it('should update the context todo list, when "Completed" is selected', () => {
  //   renderComponent();
  //   const completedRadioElement = screen.getByLabelText("Completed");
  //   fireEvent.click(completedRadioElement);
  //   const todoListItems = screen.queryAllByTestId("todo-list-item");
  //   expect(todoListItems.length).toBe(0);
  // });

  describe("When one item is added", () => {
    it('should display 0 items in "Completed" section', () => {
      renderComponent();
      const inputElement: HTMLInputElement = screen.getByRole("textbox");
      fireEvent.change(inputElement, { target: { value: "test" } });
      fireEvent.keyDown(inputElement, { key: "Enter" });

      const completedRadioElement = screen.getByRole("radio", {
        name: "Completed",
      });
      fireEvent.click(completedRadioElement);

      const todoListItems = screen.queryAllByTestId("todo-list-item");
      expect(todoListItems.length).toBe(0);
    });
    // describe("When one item is selected as Complete", () => {
    //   it('should display one item in "completed" section', () => {
    //     renderComponent();
    //     const inputElement: HTMLInputElement = screen.getByRole("textbox");
    //     fireEvent.change(inputElement, { target: { value: "test" } });
    //     fireEvent.keyDown(inputElement, { key: "Enter" });

    //     const todoListItem = screen.getByTestId("todo-list-item");
    //     fireEvent.click(todoListItem);

    //     const completedRadioElement = screen.getByLabelText("Completed");
    //     fireEvent.click(completedRadioElement);
    //     const todoListItems = screen.queryAllByTestId("todo-list-item");
    //     expect(todoListItems.length).toBe(1);
    //   });
    // });
  });
});
