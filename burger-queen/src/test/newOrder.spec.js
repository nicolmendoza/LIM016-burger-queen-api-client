import React, { useState as useStateMock } from "react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import Products from "../components/New Order/NewOrder.jsx";
import { render, screen, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import data from "./data/products.js";
import { act } from "react-dom/test-utils";
import ReactDom from "react-dom";

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

// let container;

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

describe("render", () => {
  test("show filter", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));

    const { getByTestId, asFragment } = render(<Products />)

    // userEvent.click(screen.getByText(/desayuno/i))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const listNode = await screen.findByTestId("list");
    console.log(listNode.children);
    expect(listNode.children).toHaveLength(4)

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
  });
});
