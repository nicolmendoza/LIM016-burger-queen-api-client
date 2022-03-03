import React, { useState as useStateMock } from 'react';
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";
import Products from "../components/New Order/NewOrder.jsx";
import { render, cleanup, waitForElement, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './data/products.js'
import Cart from '../components/New Order/components/Cart'

jest.mock('axios');


beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    window.localStorage = {
        get: (key) => {
          if (key === 'role') {
            return 'admin'
          }
        }
    }
});

describe('New Order', () => {
    beforeEach(() => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: data}))
    })
    test('show 4 products in screen', async () => {
        
        const { getByTestId, asFragment } = render(<Products />)
        const listNode = await screen.findByTestId('list');
        expect(listNode.children).toHaveLength(4)
    });
    test('Show 1 product with filter Desayuno',  async () => {

        render(<Products />)
        const listNode = await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /desayuno/i,}))
        const list = await screen.findByTestId('list')
        expect(list.children).toHaveLength(1)
    });
})

describe.only('Cart', () => {
    test.only('envia una orden', async   () =>{
        const arrOrden = [{
                qty: 1,
                name: "cafe",
                price: 11,
                image: "imagen",
                type: "desayuno"
            }]
        
        const orden = [{
            client: "",
            products: [{
            qty: 1,
            comment: "",
            product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        }]
        }]

        axios.post.mockImplementationOnce(() =>
            Promise.resolve({data: orden}))

        render(<Cart cart={arrOrden} setCart={() => {}} />)
        const elem = screen.getByRole("button", {name: /Generar Orden/i,})

        userEvent.click(elem)

        
        const modal = await screen.findByTestId('modal')
        const msj = screen.getByText( /Orden Creada/)
        expect(msj).toBeInTheDocument() 
    } )
})