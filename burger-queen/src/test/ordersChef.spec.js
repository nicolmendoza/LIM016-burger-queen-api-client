import React, { useState as useStateMock } from 'react';
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";
import GetOrders from "../components/GetOrders";
import { render, cleanup, waitForElement, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './data/orders'

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

describe('Get Order', () => {
    
    test('show 0 products in screen', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: data}))
        const { getByTestId, asFragment } = render(<GetOrders />)
        const listNode = await screen.findByTestId('list');
        console.log(listNode)
        expect(listNode.children).toHaveLength(1)
    });
    // test('Show 1 product with filter Desayuno',  async () => {
    //     axios.get.mockImplementationOnce(() =>
    //         Promise.resolve({data: data}))
    //     render(<Products />)
    //     const listNode = await screen.findByTestId('list');
    //     userEvent.click(screen.getByRole("button", {name: /desayuno/i,}))
    //     const list = await screen.findByTestId('list')
    //     console.log(list) 
    //     expect(list.children).toHaveLength(1)
    // });
})
