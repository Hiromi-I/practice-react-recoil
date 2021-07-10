import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("renders empty screen at first", () => {
    render(<App />);
    const emptyElement = screen.getByText(/TODO List is Empty.../i);
    expect(emptyElement).toBeInTheDocument();
  });
});
