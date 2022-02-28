import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Login";
import { render, screen, fireEvent } from "@testing-library/react";

// import axios from 'axios'

// jest.mock('axios', axios)

// console.log(axios)

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
});

test("Should contain texts", () => {
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  const inicio = screen.getByRole("button", { name: /Iniciar/i });
  const password = screen.getByLabelText(/Password/i);
  const email = screen.getByLabelText(/email/i);
  expect(inicio).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test("should view a help", async () => {
  // eslint-disable-next-line testing-library/await-async-query
  const inputPassword = await screen.findByPlaceholderText(
    "******************"
  );

  const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

  fireEvent.change(inputPassword, { target: { value: /"hi"/i } });
  const spanText = await screen.findByText(
    /La contraseña debe de tener entre 4 y 16 digitos/i
  );

  fireEvent.change(inputEmail, { target: { value: /"hi"/i } });
  const spanText2 = await screen.findByText(
    /El correo debe cumplir con el siguiente formato usuario@example.com/i
  );

  expect(spanText2).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test("should be login user", async () => {
  const mockOnSubmit = jest.fn();
  const inputPassword = await screen.findByPlaceholderText(
    "******************"
  );

  const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

  const button = screen.getByRole("button", { name: /Iniciar/i });

  fireEvent.change(inputPassword, {
    target: { value: /"usuario@example.com"/i },
  });

  fireEvent.change(inputEmail, { target: { value: /"contraseña"/i } });

  fireEvent.click(button);

  expect(mockOnSubmit).toHaveBeenCalled();
});

//find-------> elementos asincronos
//query--------->consulta de elmentos que pueden o no estar
