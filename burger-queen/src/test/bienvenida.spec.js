import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Bienvenida from "../components/Bienvenida";
import { render, screen, fireEvent } from "@testing-library/react";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Bienvenida />);
});

test("Should contain texts", () => {
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  const button = screen.getByRole("button", { name: /Iniciar sesión/i });
  const inicio = screen.getByRole("button", { name: /Iniciar/i });
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
  expect(inicio).toBeInTheDocument();
});
