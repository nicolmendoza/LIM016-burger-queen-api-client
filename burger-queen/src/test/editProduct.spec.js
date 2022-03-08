import React from "react";
import "@testing-library/jest-dom/extend-expect";
import EditProduct from "../components/EditProduct";
import axios from "axios";
import { render, screen, fireEvent, cleanup} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import data from './data/products'

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
          Promise.resolve({data: data.dataAll[0]})) 
  })
      test('Change information of user Luis waiter to chef', async() => {
        render(<EditProduct/>)
        const name = screen.getByPlaceholderText("Enter Name");
        const price = await screen.findByPlaceholderText("Enter price");
        const image = await screen.findByPlaceholderText("Choose an image");

        fireEvent.change(name, {target: { value:"Cafe con leche"}})
        fireEvent.change(price, {target: { value:10}})
        fireEvent.change(image, {target: { value:"imagen2"}})

        axios.put.mockImplementationOnce(() => Promise.resolve({ data: {
            _id: 1,
            name: "Cafe con leche",
            price: 10,
            image: "imagen2",
            type: "Desayuno",
          }}))

        const submit = screen.getByRole("button", {name: /Guardar/i,})

        userEvent.click(submit)
  
        await screen.findByTestId('modal') 

        expect(screen.getByText( /Exito/)).toBeInTheDocument()
        expect(screen.getByTestId('modal')).toBeInTheDocument()
        expect(screen.getByText( /Cafe con leche/)).toBeInTheDocument()

        const cerrar = screen.getByRole("button", {name: /Aceptar/i,})
        userEvent.click(cerrar)
        expect(screen.queryByTestId('modal')).toBeNull()
      })
})  