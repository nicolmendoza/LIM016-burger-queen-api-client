import React, { useState as useStateMock } from 'react';
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";
import Products from "../components/New Order/NewOrder.jsx";
import { render, cleanup, waitForElement, screen, fireEvent } from '@testing-library/react';
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
        const listNode = await screen.findByTestId('list');;
        expect(listNode.children).toHaveLength(4)
    });
    test('Show product cafe with filter Desayuno',  async () => {

        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /desayuno/i,}))
        const list = await screen.findByTestId('list')
        expect(list.children).toHaveLength(1)  
        expect(screen.getByText('cafe')).toBeInTheDocument()
    });

    test('Show product hamburguesa with filter Hamburguesa',  async () => {
        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /Hamburguesas/i,}))
        const list = await screen.findByTestId('list')
        expect(list.children).toHaveLength(1)
        expect(screen.getByText('hamburguesa2')).toBeInTheDocument()
    });

    test('Show product papas with filter Complementos',  async () => {
        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /Complementos/i,}))
        const list = await screen.findByTestId('list')
        
        expect(list.children).toHaveLength(1)
        expect(screen.getByText('papas')).toBeInTheDocument()
    });

    test('Show product gaseosa with filter Bebidas',  async () => {
        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /Bebidas/i,}))
        const list = await screen.findByTestId('list')

        expect(list.children).toHaveLength(1)
        expect(screen.getByText('gaseosa')).toBeInTheDocument()
    });

    test('Show all products with filter All',  async () => {
        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByRole("button", {name: /Bebidas/i,}))
        const list = await screen.findByTestId('list')

        userEvent.click(screen.getByRole("button", {name: /All/i,}))
        const all = await screen.findByTestId('list')
        expect(all.children).toHaveLength(4)
        expect(screen.getByText('gaseosa')).toBeInTheDocument()
    });

    test('Add product in cart',  async () => {
        render(<Products />)
        await screen.findByTestId('list');
        userEvent.click(screen.getByTestId('papas'))

        const item = screen.getByTestId('id-4') 
        expect(item).toBeInTheDocument()
        expect(item).toHaveTextContent('papas')
    });

})

describe('Cart', () => {
    test('envia una orden', async   () =>{
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

        await screen.findByTestId('modal')
        const msj = screen.getByText( /Orden Creada/)
        expect(msj).toBeInTheDocument()
    } )

    test('modal de error al enviar orden vacia', async   () =>{
        axios.post.mockImplementationOnce(() =>
            Promise.resolve())

        render(<Cart cart={[]} />)
        const elem = screen.getByRole("button", {name: /Generar Orden/i,})

        userEvent.click(elem)

        await screen.findByTestId('modal')

        const msj = screen.getByText(/Error/)
        expect(screen.getByText(/No hay productos en la lista/)).toBeInTheDocument()
        expect(msj).toBeInTheDocument()
    })

    test('Cerrar el modal con boton aceptar', async () =>{
        axios.post.mockImplementationOnce(() =>
            Promise.resolve())

        render(<Cart cart={[]} />)
        const elem = screen.getByRole("button", {name: /Generar Orden/i,})

        userEvent.click(elem)

        await screen.findByTestId('modal')

        const cerrar = screen.getByRole("button", {name: /Aceptar/i,})
        userEvent.click(cerrar)

        expect(screen.queryByTestId('modal')).toBeNull()
    })

    test.only('Envia una orden con nombre del cliente y un comentario', async () =>{
        const arrOrden = [{
            qty: 1,
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno"
        }]
    
        render(<Cart cart={arrOrden} setCart={() => {}} />)
        const name = await screen.findByPlaceholderText("Nombre del cliente");
        const comment = await screen.findByPlaceholderText("Añade un extra");


        fireEvent.change(name, { target: { value: "Rosa"} });
        fireEvent.change(comment, { target: { value: "Sin lechuga" } })


        const orden = [{
            client: "Rosa",
            products: [{
            qty: 10,
            comment: "Sin lechuga",
            product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        }]
        }] 
        axios.post.mockImplementationOnce(() => Promise.resolve({data: orden})
        )

        const elem = screen.getByRole("button", {name: /Generar Orden/i,})

        userEvent.click(elem)
    
        await screen.findByTestId('modal')
        const msj = screen.getByText( /Orden Creada/)
        screen.debug() 

        expect(msj).toBeInTheDocument()
        expect(screen.getByText( /Cliente: Rosa/)).toBeInTheDocument()  
    })
    test('Elimina un item del cart', async () =>{
        const arrOrden = [{
            qty: 1,
            _id:1,
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno"
        },
        {
            qty: 1,
            _id:2,
            name: "hamburguesa",
            price: 11,
            image: "imagen",
            type: "hamburguesa"
        }]
        console.log(arrOrden[0])
        render(<Cart cart={arrOrden} setCart={() => {}} deleteProduct={() => {}}/>)
        const name = await screen.findByPlaceholderText("Nombre del cliente");

        fireEvent.change(name, { target: { value: "Rosa"} });

        const button = await screen.findByTestId('delete-cafe') 

        userEvent.click(button) 
    })
})