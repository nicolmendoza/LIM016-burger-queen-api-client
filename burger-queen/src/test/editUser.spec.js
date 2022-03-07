import React from "react";
import "@testing-library/jest-dom/extend-expect";
import EditUser from "../components/EditUser";
import { act } from 'react-dom/test-utils';
import axios from "axios";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

jest.mock("axios", () => ({
  ...jest.requireActual('axios'),
  post: jest.fn(),
  get:jest.fn(),
}) );

describe('EditUser', () => {
    test('Se edita un usuario', () => {
        render(<EditUser/>)
        screen.debug()
    })
})
