import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../components/Settings";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import EditUser from "../components/EditUser";
import data from "./data/users";
import dataProducts from "./data/products";

import axios from "axios";
import EditProduct from "../components/EditProduct";
jest.mock("axios");

// it("Show data initial Users", () => {
//   localStorage.setItem("role", "admin");
//   // eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Settings />);
//   const next = screen.getByText(/next/i);
//   const prev = screen.getByText(/prev/i);
//   const settings = screen.getByText(/settings/i);
//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);
//   const usuarios = screen.getByText(/Crear, modificar y eliminar usuarios/i);
//   expect(next).toBeInTheDocument();
//   // fireEvent.click(products);
//   // fireEvent.click(usuarios);
//   expect(prev).toBeInTheDocument();
//   expect(settings).toBeInTheDocument();
// });

// test("Delete user", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   await screen.findByTestId("list");
//   expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
//   const buttonEditar = screen.getAllByRole("button", { name: "Eliminar" });

//   axios.delete.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataDelete,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(buttonEditar[0]);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAllDelete,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );

//   await screen.findByTestId("list");

//   expect(screen.queryByText("Luis")).toBe(null);
//   // eslint-disable-next-line testing-library/no-debugging-utils
//   screen.debug();
// });

// test("Click button prev user", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);
//   const listNode = await screen.findByTestId("list");
//   console.log(listNode);

//   const prev = screen.getByText(/prev/i);
//   fireEvent.click(prev);
//   expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
// });

// test("Click button next user", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);
//   const listNode = await screen.findByTestId("list");
//   console.log(listNode);

//   const next = screen.getByText(/next/i);

//   fireEvent.click(next);
//   expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
//   // eslint-disable-next-line testing-library/no-debugging-utils
//   screen.debug();
// });

test("show loading user", async () => {
  localStorage.setItem("role", "admin");
  render(<Settings></Settings>);
  expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  //  await screen.findAllByTestId('list')
  screen.debug();
});


test("show loading products", async () => {
  localStorage.setItem("role", "admin");
   axios.get.mockImplementationOnce(()=>
   Promise.resolve({
     data:data.dataAll,
    headers:{
       link: data.dataLink,
     }
   }))
  render(<Settings></Settings>);
   await screen.findAllByTestId('list')
  screen.debug();
});

// test("Delete Products", async () => {
//   localStorage.setItem("role", "admin");

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAll,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(products);
//   const listNode = await screen.findByTestId("listProducts");
//   const buttonDelete = screen.getAllByRole("button", { name: "Eliminar" });

//   axios.delete.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataDelete,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAllDelete,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(buttonDelete[0]);
//   await screen.findByTestId("listProducts");
//   // console.log(listNode)
//   expect(screen.queryByText("cafe")).toBe(null);
//   // eslint-disable-next-line testing-library/no-debugging-utils
//   screen.debug();
// });

// test("Click button prev product", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAll,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(products);

//   const listNode = await screen.findByTestId("listProducts");
//   console.log(listNode);

//   const prev = screen.getByText(/prev/i);
//   fireEvent.click(prev);
//   expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(4);
//   screen.debug();
// });

// test("Click button next product", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAll,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(products);

//   const listNode = await screen.findByTestId("listProducts");
//   console.log(listNode);

//   const prev = screen.getByText(/next/i);
//   fireEvent.click(prev);
//   expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(4);
//   screen.debug();
// });

// it("Not permission", async () => {
//   localStorage.setItem("role", "mesera");

//   // eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Settings />);

//   const page404 = screen.getByText(/no tiene acceso para esta ruta/i);
//   expect(page404).toBeInTheDocument();
// });

// it("create user", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);
//   const listNode = await screen.findByTestId("list");
//   console.log(listNode);

//   const icon = await screen.findByTestId("AddCircleOutlineIcon");
//   fireEvent.click(icon);

//   axios.post.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataNewUser,
//     })
//   );

//   axios.get.mockImplementationOnce(() =>
//   Promise.resolve({
//     data: data.dataAllAndNewUser,
//     headers: {
//       link: data.dataLink,
//     },
//   })
// );

//   const buttonGuardar=screen.getByText('Guardar')
//   fireEvent.click(buttonGuardar)
//   await screen.findByTestId("list");

//   expect(screen.getByText('lesly@burgerqueen.com')).toBeInTheDocument()
//   screen.debug();

// });

// it("create product", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAll,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(products);

//   await screen.findByTestId("listProducts");

//   const buttonAddProduct = await screen.findByTestId("AddCircleOutlineIcon");

//   axios.post.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.newProduct,
//     })
//   );

//   fireEvent.click(buttonAddProduct);
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAllAddNewProduct,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );

//   const buttonGuardar = screen.getByRole("button", { name: "Guardar" });
//   fireEvent.click(buttonGuardar);

//   // AddCircleOutlineIcon
//   await screen.findByTestId("listProducts");
//   expect(screen.getByText('huevos')).toBeInTheDocument()

//   screen.debug();
// });

// it("edit product", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);

//   const products = screen.getByText(/Crear, modificar y eliminar productos/i);

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.dataAll,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );
//   fireEvent.click(products);

//   await screen.findByTestId("listProducts");

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: dataProducts.productEdit,
//       headers: {
//         link: dataProducts.link,
//       },
//     })
//   );

//   const buttonsEditar=screen.getAllByRole('button',{name:/editar/i})
//   fireEvent.click(buttonsEditar[0])

//   const history = createMemoryHistory();
//   const route = "/editProduct/123";
//   history.push(route);
//   render(
//     <Router location={history}>
//       <EditProduct />
//     </Router>
//   );

//   screen.debug();
// });

// it.only("edit user", async () => {
//   localStorage.setItem("role", "admin");
//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.dataAll,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   render(<Settings />);
//   await screen.findByTestId("list");

//   axios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: data.editUser,
//       headers: {
//         link: data.dataLink,
//       },
//     })
//   );
//   const buttonsEditar = screen.getAllByRole("button", { name: /editar/i });
//   // fireEvent.click(buttonsEditar[0]);

//   const history = createMemoryHistory();
//     const route = "/edit/6211a7e4c457ec781d3f4667";

//     history.push(route);
//     render(
//       <Router location={history}>
//         <EditUser />
//       </Router>
//     )

//   screen.debug();
// });
