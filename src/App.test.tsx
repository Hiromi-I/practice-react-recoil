import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("renders empty screen at first", () => {
    render(<App />);
    const emptyElement = screen.getByText(/TODO List is Empty.../i);
    expect(emptyElement).toBeInTheDocument();
  });

  describe("when create new Todo", () => {
    const setup = () => {
      const result = render(<App />);
      const emptyElement = screen.getByText(/TODO List is Empty.../i); 
      const input = screen.getByLabelText("new Todo");
      const createButton = screen.getByLabelText("create new Todo");

      fireEvent.change(input, { target: { value: "New Todo For a Test" } });
      fireEvent.click(createButton);

      return {
        emptyElement,
        input,
        createButton,
        result,
      };
    };

    it("doesn't render empty screen", () => {
      const { emptyElement } = setup();
      expect(emptyElement).not.toBeInTheDocument();
    });

    it("resets text input", () => {
      const { input } = setup();
      expect(input.textContent).toBe("");
    });

    it("create new Todo", () => {
      const { result } = setup();
      const list = result.getByRole("listitem");
      expect(list.textContent).toMatch(/New Todo For a Test/);
    });
  });

});
