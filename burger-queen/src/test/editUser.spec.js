import React from "react";
import "@testing-library/jest-dom/extend-expect";
import EditUser from "../components/EditUser";
import axios from "axios";
import { render, screen, fireEvent, cleanup} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import data from './data/users'

jest.mock("axios", () => ({
  ...jest.requireActual('axios'),
  post: jest.fn(),
  get:jest.fn(),
  put:jest.fn(),
}) );

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  Storage.prototype.getItem = jest.fn(() => 'admin');
  window.localStorage = {
    getItem: (key) => {
      if (key === "role") { 
        return "admin";
      } 
    },
  };
});


describe('EditUser', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() =>
        Promise.resolve({data: data.dataAll[1]})) 
})
    test('Change information of user Luis waiter to chef', async() => {
      
      const {getByLabelText, rerender }=render(<EditUser/>)
        const name = screen.getByPlaceholderText("Enter name");
        const email = await screen.findByPlaceholderText("Enter email");
        const image = await screen.findByPlaceholderText("Image");
        const password = await screen.findByPlaceholderText("**************");
        const cocinera = screen.getByLabelText(/Cocinerx/) 
        
        fireEvent.change(name, {target: { value:"Luis Miguel"}})
        fireEvent.change(email, {target: { value:"luis-mi@bq.com"}})
        fireEvent.change(image, {target: { value:"imagen4"}})
        fireEvent.change(password, {target: { value:"mesero21"}})
        fireEvent.click(cocinera);

        expect(cocinera).toBeChecked();
        
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: 
          {
            _id: "123",
            email: "luis-mi@bq.com",
            password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
            roles: {
              admin: false,
              name: 'cocinera'
            },
            image:
              "imagen4",
            createdAt: "2022-02-20T02:31:00.686+00:00",
            updatedAt: "2022-02-27T23:25:30.739+00:00",
            nameUser: "Luis Miguel",
          }})) 
        const submit = screen.getByRole("button", {name: /Guardar/i,})

        userEvent.click(submit)

        await screen.findByTestId('modal') 

        expect(screen.getByText( /Usuario Actualizado/)).toBeInTheDocument()
        expect(screen.getByTestId('modal')).toBeInTheDocument()

        const cerrar = screen.getByRole("button", {name: /Aceptar/i,})
        userEvent.click(cerrar)
        expect(screen.queryByTestId('modal')).toBeNull()
    })

    test('Change information of role to Admin', async() => {
      
      const {getByLabelText, rerender }=render(<EditUser/>)
        const name = screen.getByPlaceholderText("Enter name");
        const email = await screen.findByPlaceholderText("Enter email");
        const image = await screen.findByPlaceholderText("Image");
        const password = await screen.findByPlaceholderText("**************");
        const admin = screen.getByLabelText(/Administrador/) 
        
        fireEvent.change(name, {target: { value:"Luis Miguel"}})
        fireEvent.change(email, {target: { value:"luis-mi@bq.com"}})
        fireEvent.change(image, {target: { value:"imagen4"}})
        fireEvent.change(password, {target: { value:"mesero21"}})
        fireEvent.click(admin);

        expect(admin).toBeChecked();
        
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: 
          {
            _id: "123",
            email: "luis-mi@bq.com",
            password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
            roles: {
              admin: true,
            },
            image:
              "imagen4",
            createdAt: "2022-02-20T02:31:00.686+00:00",
            updatedAt: "2022-02-27T23:25:30.739+00:00",
            nameUser: "Luis Miguel",
          }})) 
        const submit = screen.getByRole("button", {name: /Guardar/i,})

        userEvent.click(submit)

        await screen.findByTestId('modal') 

        expect(screen.getByText( /Usuario Actualizado/)).toBeInTheDocument()
        expect(screen.getByTestId('modal')).toBeInTheDocument()
    })
})

describe('EditUser admin', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() =>
        Promise.resolve({data: data.dataAll[0]})) 
})
    test('Change information of user Luis waiter to chef', async() => {
      
      const {getByLabelText, rerender }=render(<EditUser/>)
        const name = screen.getByPlaceholderText("Enter name");
        const email = await screen.findByPlaceholderText("Enter email");
        const image = await screen.findByPlaceholderText("Image");
        const password = await screen.findByPlaceholderText("**************");
        const waiter = screen.getByLabelText(/Cocinerx/) 
        
        fireEvent.change(name, {target: { value:"Luis Miguel"}})
        fireEvent.change(email, {target: { value:"luis-mi@bq.com"}})
        fireEvent.change(image, {target: { value:"imagen4"}})
        fireEvent.change(password, {target: { value:"mesero21"}})
        fireEvent.click(waiter);

        expect(waiter).toBeChecked();
        
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: 
          {
            _id: "123",
            email: "luis-mi@bq.com",
            password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
            roles: {
              admin: false,
              name: 'mesera'
            },
            image:
              "imagen4",
            createdAt: "2022-02-20T02:31:00.686+00:00",
            updatedAt: "2022-02-27T23:25:30.739+00:00",
            nameUser: "Luis Miguel",
          }})) 
        const submit = screen.getByRole("button", {name: /Guardar/i,})

        userEvent.click(submit)

        await screen.findByTestId('modal') 

        expect(screen.getByText( /Usuario Actualizado/)).toBeInTheDocument()
        expect(screen.getByTestId('modal')).toBeInTheDocument()

        const cerrar = screen.getByRole("button", {name: /Aceptar/i,})
        userEvent.click(cerrar)
        expect(screen.queryByTestId('modal')).toBeNull()
    })

})
