import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Login from "../components/Login";


beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  window.localStorage = {
    get: (key) =>  {
      if (key === "role") {
        return "admin";
      }
    },
  };
  // eslint-disable-next-line testing-library/no-render-in-setup
  // render(<App />);
});


test('full app rendering', () => {
  const history = createMemoryHistory()
    const route = "/login";
  history.push(route);
  render(
    <Router location={history}>
      <Login />
    </Router>
  );

  screen.debug()
})

// test("routes login", () => {
//   const history = createMemoryHistory();
//   const route = "/login";
//   history.push(route);
//   screen.
//   render(
//     <Router history={history}>
//       <Login />
//     </Router>
//   );
//   // expect(screen.getByLabelText(/Iniciar/i)).toBeInTheDocument();

//   // eslint-disable-next-line testing-library/no-debugging-utils
//   screen.debug();
// });
