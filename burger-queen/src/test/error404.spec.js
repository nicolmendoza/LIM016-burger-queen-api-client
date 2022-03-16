import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Login from "../components/Login";
import Error404 from "../components/Error404";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Error404 />);
});

describe("error 404", () => {
  test("redirect admin", () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("role", "admin");
    expect(screen.getByText(/Página no encontrada/i)).toBeInTheDocument();
    const Regresar = screen.getByRole("button", { name: "Regresar" });
    expect(Regresar).toBeInTheDocument();
    fireEvent.click(Regresar);
    screen.debug();
  });
  test("redirect cocinera", () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("role", "cocinera");
    expect(screen.getByText(/Página no encontrada/i)).toBeInTheDocument();
    const Regresar = screen.getByRole("button", { name: "Regresar" });
    expect(Regresar).toBeInTheDocument();
    fireEvent.click(Regresar);
    screen.debug();
  });
  test("redirect mesera", () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("role", "mesera");
    expect(screen.getByText(/Página no encontrada/i)).toBeInTheDocument();
    const Regresar = screen.getByRole("button", { name: "Regresar" });
    expect(Regresar).toBeInTheDocument();
    fireEvent.click(Regresar);
    screen.debug();
  });
});
