import React from "react";
import { render } from "@testing-library/react";
import { TodoList } from "./TodoList";

const renderComponent = () => {
  render(<TodoList />);
};

describe("TodoList", () => {
  it("renders", () => {
    renderComponent();
  });
});
