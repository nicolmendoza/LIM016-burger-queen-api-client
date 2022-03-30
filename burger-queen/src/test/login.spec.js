import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Login";
import { act } from 'react-dom/test-utils';
import Modal from "../utils/modal";
import axios from "axios";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { onSubmitForm } from "../components/Login";

jest.mock("axios", () => ({
  ...jest.requireActual('axios'),
  post: jest.fn(),
  get:jest.fn(),
}) );

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
describe('Login', () => {
  test('Inicia sesión enviando email y password', async() => {

    const data = { token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjE0MjA0NjJkYzJlNmFkNTNiMDA1NzciLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwibmFtZVVzZXIiOiJBZG1pbmlzdHJhZG9yIGdlbmVyYWwiLCJpYXQiOjE2NDY1OTYwNjQsImV4cCI6MTY0NjY4MjQ2NH0.gcIwS3_6x5fULrHGxE5X2hsf5V8oPblHFt6dKx6oYhc" };
    
    render(<Login />)
    
    const inputPassword = await screen.findByPlaceholderText("******************");
    const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

    fireEvent.change(inputEmail, { target: { value: "admin@localhost"} });
    fireEvent.change(inputPassword, { target: { value: "changeme" } })

    expect(screen.getByDisplayValue( 'admin@localhost')).toBeInTheDocument()
    expect(screen.getByDisplayValue( 'changeme')).toBeInTheDocument() 

    axios.post.mockImplementationOnce(() => Promise.resolve({ data: data })) 

    const elem = screen.getByRole("button", {name: /Iniciar/i,})
    
    userEvent.click(elem)
    // const location = await window.location.href
    expect(axios.post).toBeCalledWith( "https://bq-api-2022.herokuapp.com/auth", {"email": "admin@localhost", "password": "changeme"}) 
    //expect(window.location.hash).toContain('#/admin/users')
  })
  test('Deberia mostrar un modal de usuario no existe', async() => {

    const response =  {data :{message: 'El usuario no existe' }};
    
    render(<Login />)
    
    const inputPassword = await screen.findByPlaceholderText("******************");
    const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

    fireEvent.change(inputEmail, { target: { value: "admin@localhost.com"} });
    fireEvent.change(inputPassword, { target: { value: "changeme" } })

    expect(screen.getByDisplayValue( 'admin@localhost.com')).toBeInTheDocument()
    expect(screen.getByDisplayValue( 'changeme')).toBeInTheDocument()

    axios.post.mockImplementationOnce(() => Promise.reject({ response: response })) 

    const elem = screen.getByRole("button", {name: /Iniciar/i,}) 

    userEvent.click(elem)

    await screen.findByTestId('modal') 

    expect(screen.getByText( /El usuario no existe/)).toBeInTheDocument()
  })

  test('Deberia mostrar un modal de No ingresaste correo o contraseña', async() => {

    const response =  {data :{message: 'No ingresaste correo o contraseña' }};
    
    render(<Login />)

    axios.post.mockImplementationOnce(() => Promise.reject({ response: response })) 

    const elem = screen.getByRole("button", {name: /Iniciar/i,}) 

    userEvent.click(elem)

    await screen.findByTestId('modal') 

    expect(screen.getByText( /No ingresaste correo o contraseña/)).toBeInTheDocument()
  })

  test('Deberia mostrar un modal de La contraseña es incorrecta', async() => {

    const response =  {data :{message: 'La contraseña es incorrecta, intente de nuevo' }};
    
    render(<Login />)
    
    const inputPassword = await screen.findByPlaceholderText("******************");
    const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

    fireEvent.change(inputEmail, { target: { value: "admin@localhost"} });
    fireEvent.change(inputPassword, { target: { value: "changeme123" } })

    expect(screen.getByDisplayValue( 'admin@localhost')).toBeInTheDocument()
    expect(screen.getByDisplayValue( 'changeme123')).toBeInTheDocument()

    axios.post.mockImplementationOnce(() => Promise.reject({ response: response })) 

    const elem = screen.getByRole("button", {name: /Iniciar/i,}) 

    userEvent.click(elem)

    await screen.findByTestId('modal') 

    expect(screen.getByText( /Contraseña incorrecta./)).toBeInTheDocument()
  })
  test('El boton Aceptar cierra el modal', async() => {

    const response =  {data :{message: 'La contraseña es incorrecta, intente de nuevo' }};
    
    render(<Login />)
    
    const inputPassword = await screen.findByPlaceholderText("******************");
    const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

    fireEvent.change(inputEmail, { target: { value: "admin@localhost"} });
    fireEvent.change(inputPassword, { target: { value: "changeme123" } })

    expect(screen.getByDisplayValue( 'admin@localhost')).toBeInTheDocument()
    expect(screen.getByDisplayValue( 'changeme123')).toBeInTheDocument()

    axios.post.mockImplementationOnce(() => Promise.reject({ response: response })) 

    const elem = screen.getByRole("button", {name: /Iniciar/i,}) 

    userEvent.click(elem)

    await screen.findByTestId('modal') 

    userEvent.click(screen.getByRole("button", {name: /Aceptar/i,}))

    expect(screen.queryByTestId('modal')).toBeNull()
  })
  test('Cambia la visibilidad del password', async () => {
    render(<Login />)
    
    const elem = await screen.findByTestId('VisibilityOffRoundedIcon') 

    expect(elem).toBeInTheDocument()

    fireEvent.click(elem)
    
    
    const notShow = await screen.findByTestId('RemoveRedEyeRoundedIcon')
    expect(screen.queryByTestId('VisibilityOffRoundedIcon') ).toBeNull()
    expect(notShow).toBeInTheDocument()

    fireEvent.click(notShow)

    expect(screen.queryByTestId('RemoveRedEyeRoundedIcon') ).toBeNull()
    expect(screen.getByTestId('VisibilityOffRoundedIcon') ).toBeInTheDocument() 
  })
  test("Should contain texts", () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
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
})

//   test.only("should be login user", async () => {
//     // eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Login />);
//   const mockOnSubmit = jest.fn();
//   const inputPassword = await screen.findByPlaceholderText(
//     "******************"
//   );

//   const inputEmail = await screen.findByPlaceholderText("usuario@example.com");
//   const button = screen.getByRole("button", { name: /Iniciar/i });
//   fireEvent.change(inputPassword, { target: { value: /"usuario@example.com"/i }});
//   fireEvent.change(inputEmail, { target: { value: /"contraseña"/i }});
//   fireEvent.click(button);

//   expect(typeof mockOnSubmit).toBe("function");

  
//   //find-------> elementos asincronos
//   //query--------->consulta de elmentos que pueden o no estar
// });


// localStorage.setItem('role',"admin")
// beforeEach(() => {

// });



// describe('App', () => {

//   test('axios post info user', async () => {
//     const res = 
//       { token: '1234'}
//     ;
//   //   axios.post.mockImplementationOnce(() =>
//   //     Promise.resolve({ data: res })
//   //   );

//   //    // eslint-disable-next-line testing-library/no-render-in-setup
//   // render(<Login />);
//   //   act(() => {
      
//   // const setStateModa=()=>true
//   // ReactDOM.render(<Modal />, container);
//   //   });
//     await userEvent.click(screen.getByRole('button'));

//     // const items = await screen.findAllByRole('listitem');

//     // expect(items).toHaveLength(2);
//   });
// });
