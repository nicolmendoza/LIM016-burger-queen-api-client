import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Login from "../components/Login"
import { render, screen, fireEvent } from '@testing-library/react';





describe('renders content', () => {
  it('Should contain texts', () => {
    render(<Login />);
    expect(screen.getByText("Iniciar")).toBeInTheDocument()
  });
})