import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Login from "../components/Login";
  
beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

//   test("Should contain texts", () => {
//     // eslint-disable-next-line testing-library/no-debugging-utils
//     screen.debug();
//     const history = createMemoryHistory();
//     const route = '/login';
//     history.push(route);
//     render(
//       <Router history={history}>
//         <Login />
//       </Router>,
//     );
//     expect(screen.getByLabelText(/Iniciar/i)).toBeInTheDocument();


//   });