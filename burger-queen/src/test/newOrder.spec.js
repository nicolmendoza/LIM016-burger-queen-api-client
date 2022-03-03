import React, { useState as useStateMock } from 'react';
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";
import Products from "../components/New Order/NewOrder.jsx";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './data/products.js'
import {act} from 'react-dom/test-utils'
import ReactDom from 'react-dom'

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

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

describe('New Order', () => {
    
    test('show filter', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: data}))
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            ReactDom.render(<Products />, container)
          });

        // await userEvent.click(screen.getByText(/Desayuno/))

        // const items = await screen.findAllByRole('DivData')
        // console.log(items)
        // expect(items).toHaveLength(1) 
    });
})