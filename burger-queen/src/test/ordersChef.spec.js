import React from "react";
import "@testing-library/jest-dom/extend-expect";
import GetOrders from "../components/GetOrders";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders content", () => {
  render(<GetOrders></GetOrders>);

const mockHandler=jest.fn()

  const button = screen.getByText("LISTO");

  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(1)
  
});
