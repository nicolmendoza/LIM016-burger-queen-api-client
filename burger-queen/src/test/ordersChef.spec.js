import React, { useState as useStateMock } from "react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import orders from "./data/orders.js";
import GetOrders from "../components/GetOrders";

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


  test("Orders chef data null", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataVacia })
    );

    const { getByTestId, asFragment } = render(<GetOrders />);

    const listNode = await screen.findByTestId("listOrders");

    console.log(listNode);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(
      screen.getByText(/No hay pedidos en esta sección/i)
    ).toBeInTheDocument();
  });



  test("filter orders pending", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataPending })
    );

    const { getByTestId, asFragment } = render(<GetOrders />);

    const listNode = await screen.findByTestId("listOrders");

    // console.log(listNode);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    fireEvent.click(screen.getByRole("button", { name: /pendiente/i }));
    const buttonListo = screen.getByRole("button", { name: "Listo" });
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      listNode.children
    ).toHaveLength(1);

    expect(buttonListo).toBeInTheDocument();

    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataPut })
    );
    fireEvent.click(buttonListo);
  });



  test("filter order delivering", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataDelivering })
    );

    const { getByTestId, asFragment } = render(<GetOrders />);

    const listNode = await screen.findByTestId("listOrders");

    console.log(listNode);

    fireEvent.click(screen.getByRole("button", { name: /listo/i }));
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      listNode.children
    ).toHaveLength(1);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

  });



  test("data order pending without comment", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: orders.dataWithOutComment })
    );

    const { getByTestId, asFragment } = render(<GetOrders />);

    const listNode = await screen.findByTestId("listOrders");

    // console.log(listNode);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

    expect(
      // eslint-disable-next-line testing-library/no-node-access
      listNode.children
    ).toHaveLength(1);
  });


test("Not permission", async () => {
  localStorage.setItem("role", "mesera");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: orders.dataPending })
  );

  const { getByTestId, asFragment } = render(<GetOrders />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  expect(
    screen.getByText(/No tiene acceso para esta ruta/i)
  ).toBeInTheDocument();
});
