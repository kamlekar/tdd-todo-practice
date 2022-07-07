import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoHeader } from "./TodoHeader";

const renderComponent = () => {
  render(<TodoHeader />);
};

describe("TodoHeader", () => {
  it("renders header", () => {
    renderComponent();
    const linkElement = screen.getByText("Todo");
    expect(linkElement).toBeInTheDocument();
  });
});
