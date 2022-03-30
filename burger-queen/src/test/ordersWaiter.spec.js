import React, { useState as useStateMock } from "react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import orders from "./data/orders.js";
import Orders from "../components/Orders";

jest.mock("axios");

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  window.localStorage = {
    get: (key) => {
      if (key === "role") {
        return "admin";
      }
    },
  };
});

test("orders data null", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataVacia })
  );
  const { getByTestId, asFragment } = render(<Orders />);
  const listNode = await screen.findByTestId("listOrders");

  expect(
    // eslint-disable-next-line testing-library/no-node-access
    listNode.children
  ).toHaveLength(0);
});

test("filter orders all", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );
  const { getByTestId, asFragment } = render(<Orders />);
  const listNode = await screen.findByTestId("listOrders");
  fireEvent.click(screen.getByRole("button", { name: /todas/i }));
  expect(
    // eslint-disable-next-line testing-library/no-node-access
    listNode.children
  ).toHaveLength(4);

  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
});

describe("filter orders pending", () => {
  test("show filter", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataAll })
    );

    const { getByTestId, asFragment } = render(<Orders />);

    const listNode = await screen.findByTestId("listOrders");
    fireEvent.click(screen.getByRole("button", { name: /Pendientes/i }));

    expect(
      // eslint-disable-next-line testing-library/no-node-access
      listNode.children
    ).toHaveLength(1);

    const buttonCancelar = screen.getByRole("button", { name: /cancelar/i });
    expect(buttonCancelar).toBeInTheDocument();

    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataAllCancelled })
    );

    fireEvent.click(buttonCancelar);
  });
});

test("filter order delivering", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );

  const { getByTestId, asFragment } = render(<Orders />);

  const listNode = await screen.findByTestId("listOrders");
  fireEvent.click(screen.getByRole("button", { name: /listos/i }));

  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();

  expect(
    // eslint-disable-next-line testing-library/no-node-access
    listNode.children
  ).toHaveLength(1);

  const buttonEntregar = screen.getByRole("button", { name: /entregar/i });

  expect(buttonEntregar).toBeInTheDocument();

  axios.put.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAllDelivered })
  );
  fireEvent.click(buttonEntregar);
});

test("filter order delivered", async () => {
  localStorage.setItem("role", "mesera");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );

  const { getByTestId, asFragment } = render(<Orders />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  const listNode = await screen.findByTestId("listOrders");
  fireEvent.click(screen.getByRole("button", { name: /entregados/i }));
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
  expect(
    // eslint-disable-next-line testing-library/no-node-access
    listNode.children
  ).toHaveLength(1);
});

test("filter order cancelled", async () => {
  localStorage.setItem("role", "mesera");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );
  const { getByTestId, asFragment } = render(<Orders />);

  const listNode = await screen.findByTestId("listOrders");
  fireEvent.click(screen.getByRole("button", { name: /cancelados/i }));
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
  expect(
    // eslint-disable-next-line testing-library/no-node-access
    listNode.children
  ).toHaveLength(1);
});

test("Not permission", async () => {
  localStorage.setItem("role", "cocinera");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataAll })
  );

  const { getByTestId, asFragment } = render(<Orders />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
  expect(
    screen.getByText(/No tiene acceso para esta ruta/i)
  ).toBeInTheDocument();
});
