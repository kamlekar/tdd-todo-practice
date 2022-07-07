import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoFooter } from "./TodoFooter";

const renderComponent = () => {
  render(<TodoFooter />);
};

describe("TodoFooter", () => {
  it("renders todo footer", () => {
    renderComponent();
    const footerElements = screen.getAllByRole("radio");
    expect(footerElements.length === 3).toBeTruthy();
  });

  it('by default "All" is selected', () => {
    renderComponent();
    const footerElements: Array<HTMLInputElement> =
      screen.getAllByRole("radio");
    expect(footerElements[0].checked).toBeTruthy();
  });
});
