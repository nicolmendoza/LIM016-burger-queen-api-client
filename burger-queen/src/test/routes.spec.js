import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom'
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Login from "../components/Login";
import EditUser from "../components/EditUser.jsx";
import ProductsOrders from "../components/New Order/NewOrder.jsx";
import EditProduct from "../components/EditProduct.jsx";
import Inicio from "../components/Inicio/Inicio.jsx";
import Orders from "../components/Orders.jsx";
import GetOrders from "../components/GetOrders.jsx";
import Settings from "../components/Settings.jsx";
import Error404 from "../components/Error404.jsx";
import Profile from "../components/Profile.jsx";



// describe('Routes without token', () => {
//   test('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     screen.debug()
//   }); 
// })

describe('Routes with a token', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjE0MjA0NjJkYzJlNmFkNTNiMDA1NzciLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwibmFtZVVzZXIiOiJBZG1pbmlzdHJhZG9yIGdlbmVyYWwiLCJpYXQiOjE2NDY1OTYwNjQsImV4cCI6MTY0NjY4MjQ2NH0.gcIwS3_6x5fULrHGxE5X2hsf5V8oPblHFt6dKx6oYhc');
    App()
  });
  test('full app rendering', () => {
  const history = createMemoryHistory()
  render(
    <Router location={history}>
      <Inicio />
    </Router>,
  )
  screen.debug()
  expect(history.location.pathname).toContain('/');
  })
  test("routes login", () => {
    const history = createMemoryHistory();
    const route = "/login";
    history.push(route);
    render(
      <Router location={history}>
        <Login />
      </Router>
    );
    expect(history.location.pathname).toContain('/login')
  })
  test("Render Get Orders component", () => {
    const history = createMemoryHistory();
    const route = "/getOrders";
    history.push(route);
    render(
      <Router location={history}>
        <GetOrders />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/getOrders');
  })
  test("Render New Order component", () => {
    const history = createMemoryHistory();
    const route = "/newOrder";
    history.push(route);
    render(
      <Router location={history}>
        <ProductsOrders />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/newOrder');
  })
  test("Render All Orders component", () => {
    const history = createMemoryHistory();
    const route = "/orders";
    history.push(route);
    render(
      <Router location={history}>
        <Orders />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/orders');
  })
  test("Render Setting component", () => {
    const history = createMemoryHistory();
    const route = "/settings";
    history.push(route);
    render(
      <Router location={history}>
        <Settings />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/settings');
  })
  test("Render Profile component", () => {
    Storage.prototype.getItem = jest.fn(() => 'admin');

    const history = createMemoryHistory();
    const route = "/profile";
    history.push(route);
    render(
      <Router location={history}>
        <Profile />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/profile');
  })
  test("Render EditUser component", () => {
    const history = createMemoryHistory();
    const route = "/edit/6211a7e4c457ec781d3f4667";
    history.push(route);
    render(
      <Router location={history}>
        <EditUser />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/edit/6211a7e4c457ec781d3f4667');
  })
  test("Render EditProduct component", () => {
    const history = createMemoryHistory();
    const route = "/editProduct/6201a4b8ec39bebc5e7a3e86";
    history.push(route);
    render(
      <Router location={history}>
        <EditProduct />
      </Router>
    );
    //screen.debug()
    expect(history.location.pathname).toContain('/editProduct/6201a4b8ec39bebc5e7a3e86');
  })
  test("Render Error404 component", () => {
    const history = createMemoryHistory();
    const route = "/noValid";
    history.push(route);
    render(
      <Router location={history}>
        <Error404 />
      </Router>
    );
    // screen.debug()
    expect(history.location.pathname).toContain('/noValid')
    expect(screen.getByText(/página no encontrada/i)).toBeInTheDocument()
  })
})
// test('full app rendering', () => {
//   const history = createMemoryHistory()
//   render(
//     <Router location={history}>
//       <App />
//     </Router>,
//   )
// })




