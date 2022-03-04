import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../components/Settings";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import  EditUser from "../components/EditUser";

it("Should contain texts", () => {
  localStorage.setItem("role", "admin");
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);

  const next = screen.getByText(/next/i);
  const prev = screen.getByText(/prev/i);
  const settings = screen.getByText(/settings/i);
  expect(next).toBeInTheDocument();

  expect(prev).toBeInTheDocument();
  expect(settings).toBeInTheDocument();
});

test("Should render products y usuarios", () => {
  localStorage.setItem("role", "admin");
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);
  // eslint-disable-next-line testing-library/no-debugging-utils

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);
  const usuarios = screen.getByText(/Crear, modificar y eliminar usuarios/i);
  fireEvent.click(products);
  fireEvent.click(usuarios);
  expect(screen.getByText(/cargando.../i)).toBeInTheDocument();
  expect(screen.getByText(/cargando.../i)).toBeInTheDocument();
});

// it("Should redirect to EditUser", () => {
//     localStorage.setItem("role", "admin");
//   // eslint-disable-next-line testing-library/no-render-in-setup

//   const history = createMemoryHistory();
//   const route = "/editProduct/123";
//   history.push(route);
//    render(
//     <Router history={history}>
//       <EditUser />
//     </Router>
//   );
//     // eslint-disable-next-line testing-library/no-debugging-utils
//     screen.debug();
// });

it("Should redirect to NotFound", async () => {
  localStorage.setItem("role", "mesera");

  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);

  const page404 = screen.getByText(/no tiene acceso para esta ruta/i);
  expect(page404).toBeInTheDocument();
});
