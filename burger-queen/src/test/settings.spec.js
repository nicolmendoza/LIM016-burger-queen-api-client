import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Settings from "../components/Settings";



localStorage.setItem('role',"admin")

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);
});



// test("Should contain texts",() => {
//   // eslint-disable-next-line testing-library/no-debugging-utils
//   screen.debug();

//   const products=screen.getByText(/Productos/i)
//   const ususarios= screen.getByText(/usuario/i)
  
//   fireEvent.click(products)
// });
