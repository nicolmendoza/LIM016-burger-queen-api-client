import React from "react";
import "@testing-library/jest-dom/extend-expect";
import DashBoard from "../components/DashBoard";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import orders from "./data/orders.js";
import Bar from "react-chartjs-2";

jest.mock("axios");

test("Should contain Table and Dashboard", async () => {
  localStorage.setItem("token", "123");
  localStorage.setItem("role", "admin");
  jest.mock("react-chartjs-2", () => ({
    Bar: () => null,
  }));
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );

  render(<DashBoard />);
  await screen.findByTestId("table");

  expect(screen.getByText(/Números de pedidos:/i)).toBeInTheDocument();
  expect(screen.getByText(/Total de Ganancias:/i)).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
