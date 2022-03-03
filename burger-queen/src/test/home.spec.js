import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Login from "../components/Login";
import Profile from '../components/Profile'

beforeEach(() => {
// eslint-disable-next-line testing-library/no-render-in-setup
    render(<App/>);
  });

test("Should contain texts", () => {
const buttonLogin=screen.getByText(/login/i)
const inicio=screen.getByText(/inicio/i)
const menu=screen.getAllByText(/menu/i)
const empleados=screen.getAllByText(/empleados/i)
fireEvent.click(buttonLogin)

    
  });