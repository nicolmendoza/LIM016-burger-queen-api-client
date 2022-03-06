import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../components/Settings";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import EditUser from "../components/EditUser";
import data from "./data/users";
import dataProducts from "./data/products";

import axios from "axios";
jest.mock("axios");

it("Show data initial Users", () => {
  localStorage.setItem("role", "admin");
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);
  const next = screen.getByText(/next/i);
  const prev = screen.getByText(/prev/i);
  const settings = screen.getByText(/settings/i);
  const products = screen.getByText(/Crear, modificar y eliminar productos/i);
  const usuarios = screen.getByText(/Crear, modificar y eliminar usuarios/i);
  expect(next).toBeInTheDocument();
  // fireEvent.click(products);
  // fireEvent.click(usuarios);
  expect(prev).toBeInTheDocument();
  expect(settings).toBeInTheDocument();
});

test("Delete user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  await screen.findByTestId("list");
  expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
  const buttonEditar = screen.getAllByRole("button", { name: "Eliminar" });

  axios.delete.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(buttonEditar[0]);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAllDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  await screen.findByTestId("list");

  expect(screen.queryByText("Luis")).toBe(null);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});

test("Click button prev user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  const listNode = await screen.findByTestId("list");
  console.log(listNode);

  const prev = screen.getByText(/prev/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
});

test("Click button next user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  const listNode = await screen.findByTestId("list");
  console.log(listNode);

  const next = screen.getByText(/next/i);

  fireEvent.click(next);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});

test("Show data products", async () => {
  localStorage.setItem("role", "admin");

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);
  const listNode = await screen.findByTestId("listProducts");
  const buttonDelete = screen.getAllByRole("button", { name: "Eliminar" });

  axios.delete.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAllDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(buttonDelete[0]);
  await screen.findByTestId("listProducts");
  // console.log(listNode)
  expect(screen.queryByText("cafe")).toBe(null);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});

test("Click button prev product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  const listNode = await screen.findByTestId("listProducts");
  console.log(listNode);

  const prev = screen.getByText(/prev/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(4);
  screen.debug();
});

test("Click button next product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  const listNode = await screen.findByTestId("listProducts");
  console.log(listNode);

  const prev = screen.getByText(/next/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(4);
  screen.debug();
});

it("Not permission", async () => {
  localStorage.setItem("role", "mesera");

  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);

  const page404 = screen.getByText(/no tiene acceso para esta ruta/i);
  expect(page404).toBeInTheDocument();
});
