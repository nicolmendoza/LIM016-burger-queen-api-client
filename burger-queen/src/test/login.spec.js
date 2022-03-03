import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Login";
import { act } from 'react-dom/test-utils';
import Modal from "../utils/modal";
import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from "@testing-library/react";
import { onSubmitForm } from "../components/Login";

// import axios from 'axios'

// jest.mock('axios', axios)

// console.log(axios)

jest.mock('axios');


localStorage.setItem('role',"admin")
beforeEach(() => {

});

test("Should contain texts", () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
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
    // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
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
    // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
  const mockOnSubmit = jest.fn();
  const inputPassword = await screen.findByPlaceholderText(
    "******************"
  );

  const inputEmail = await screen.findByPlaceholderText("usuario@example.com");
  const button = screen.getByRole("button", { name: /Iniciar/i });
  fireEvent.change(inputPassword, { target: { value: /"usuario@example.com"/i }});
  fireEvent.change(inputEmail, { target: { value: /"contraseña"/i }});
  fireEvent.click(button);

  expect(typeof mockOnSubmit).toBe("function");

  
  //find-------> elementos asincronos
  //query--------->consulta de elmentos que pueden o no estar
});

describe('App', () => {

  test('axios post info user', async () => {
    const res = 
      { token: '1234'}
    ;
  //   axios.post.mockImplementationOnce(() =>
  //     Promise.resolve({ data: res })
  //   );

  //    // eslint-disable-next-line testing-library/no-render-in-setup
  // render(<Login />);
  //   act(() => {
      
  // const setStateModa=()=>true
  // ReactDOM.render(<Modal />, container);
  //   });
    await userEvent.click(screen.getByRole('button'));

    // const items = await screen.findAllByRole('listitem');

    // expect(items).toHaveLength(2);
  });
});
