import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../components/Settings";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import EditUser from "../components/EditUser";
import data from "./data/users";
import dataProducts from "./data/products";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import EditProduct from "../components/EditProduct";

jest.mock("axios");

it("Show data initial Users", () => {
  localStorage.setItem("role", "admin");
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);
  const next = screen.getByText(/next/i);
  const prev = screen.getByText(/prev/i);
  const settings = screen.getByText(/settings/i);
  const products = screen.getByText(/Crear, modificar y eliminar productos/i);
  const usuarios = screen.getByText(/Crear, modificar y eliminar usuarios/i);
  expect(next).toBeInTheDocument();
  // fireEvent.click(products);
  // fireEvent.click(usuarios);
  expect(prev).toBeInTheDocument();
  expect(settings).toBeInTheDocument();
});

test("Delete user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  await screen.findByTestId("list");
  expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
  const buttonEditar = screen.getAllByRole("button", { name: "Eliminar" });

  axios.delete.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(buttonEditar[0]);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAllDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  await screen.findByTestId("list");

  expect(screen.queryByText("Luis")).toBe(null);
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
});

test("Click button prev user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  const listNode = await screen.findByTestId("list");

  const prev = screen.getByText(/prev/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
});

test("Click button next user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  const listNode = await screen.findByTestId("list");


  const next = screen.getByText(/next/i);

  fireEvent.click(next);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(3);
});

test("show loading user", async () => {
  localStorage.setItem("role", "admin");
  render(<Settings></Settings>);
  // expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  expect(await screen.findByTestId("loader")).toBeInTheDocument();

});

test("show loading products", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings></Settings>);
  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  fireEvent.click(products);
  expect(await screen.findByTestId("loader")).toBeInTheDocument();

});

test("Delete Products", async () => {
  localStorage.setItem("role", "admin");

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings setValue={() => {}} />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);
  const listNode = await screen.findByTestId("listProducts");
  const buttonDelete = screen.getAllByRole("button", { name: "Eliminar" });

  axios.delete.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAllDelete,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  fireEvent.click(buttonDelete[0]);

  await screen.findByTestId("listProducts");
  // console.log(listNode)
  // expect(screen.queryByText("cafe")).toBe(null);
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
});

test("Click button prev product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  const listNode = await screen.findByTestId("listProducts");

  const prev = screen.getByText(/prev/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(5);
});

test("Click button next product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  const listNode = await screen.findByTestId("listProducts");
  const prev = screen.getByText(/next/i);
  fireEvent.click(prev);
  expect(screen.getAllByRole("button", { name: "Editar" })).toHaveLength(5);

});

it("Not permission", async () => {
  localStorage.setItem("role", "mesera");

  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Settings />);

  const page404 = screen.getByText(/no tiene acceso para esta ruta/i);
  expect(page404).toBeInTheDocument();
});

it("create user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);
  axios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataNewUser,
    })
  );
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAllAndNewUser,
      headers: {
        link: data.dataLink,
      },
    })
  );
  const buttonGuardar = screen.getByRole("button", { name: "Aceptar" });
  fireEvent.click(buttonGuardar);
  // await screen.findByTestId("list");
  await screen.findByTestId("modal-create");
  expect(
    screen.getByText(/Usuario creado: lesly@burgerqueen.com/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/exito/i)).toBeInTheDocument();

  // fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal");

  expect(screen.getByText(/Exito/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Usuario creado: lesly@burgerqueen.com/i)
  ).toBeInTheDocument();

  //screen.debug();
});

it("error create user, not complete email", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);
  //   axios.post.mockImplementationOnce(() =>
  //     Promise.resolve({
  //       data: data.dataNewUser,
  //     })
  //   );

  // const buttonGuardar = screen.getByRole("button", { name: "Iniciar" });
  // fireEvent.click(buttonGuardar)
  // // await screen.findByTestId("list");
  // await screen.findByTestId("modal-create");
  expect(
    screen.getByText(
      /El correo debe cumplir con el siguiente formato usuario@example.com/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(/La contraseña debe de tener entre 4 y 16 digitos/i)
  ).toBeInTheDocument();

  // const inputName = await screen.findByPlaceholderText(
  //   /name/i
  // );

  // const inputEmail=await screen.findByPlaceholderText(
  //   /Enter email/i
  // );

  // const inputImage=await screen.findByPlaceholderText(
  //   /Imagen/i
  // );

  // const inputEmail = await screen.findByPlaceholderText("usuario@example.com");

  // fireEvent.change(inputName, { target: { value: /"nicol"/i } });

  axios.post.mockImplementationOnce(() =>
    Promise.reject({
      response: {
        data: {
          message: "no ingresó  email o password",
        },
      },
    })
  );

  fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal");
  expect(
    screen.getByText(/Por favor complete todos los datos/i)
  ).toBeInTheDocument();

});

it("error create user, password format incorrect", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);

  expect(
    screen.getByText(
      /El correo debe cumplir con el siguiente formato usuario@example.com/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(/La contraseña debe de tener entre 4 y 16 digitos/i)
  ).toBeInTheDocument();

  // const inputPassword=await screen.findByPlaceholderText(
  //   /Password/i
  // );

  const inputPassword = await screen.findByPlaceholderText(/Password/i);

  fireEvent.change(inputPassword, { target: { value: /"123"/i } });

  axios.post.mockImplementationOnce(() =>
    Promise.reject({
      response: {
        data: {
          message: "el formato de la conraaseña o email no es correcto",
        },
      },
    })
  );

  fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal");
  expect(
    screen.getByText(/El formato de la contraseña o email es incorrecta/i)
  ).toBeInTheDocument();

  //screen.debug();
});

it("error create user, user exits", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);

  expect(
    screen.getByText(
      /El correo debe cumplir con el siguiente formato usuario@example.com/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(/La contraseña debe de tener entre 4 y 16 digitos/i)
  ).toBeInTheDocument();

  // const inputPassword=await screen.findByPlaceholderText(
  //   /Password/i
  // );

  axios.post.mockImplementationOnce(() =>
    Promise.reject({
      response: {
        data: {
          message: "ya existe un usuario con ese email",
        },
      },
    })
  );

  fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal");
  expect(
    screen.getByText(/Ya existe un usuario con ese email, revise por favor/i)
  ).toBeInTheDocument();

  //screen.debug();
});

it("error password incorret format", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);

  // expect(
  //   screen.getByText(
  //     /El correo debe cumplir con el siguiente formato usuario@example.com/i
  //   )
  // ).toBeInTheDocument();
  // expect(
  //   screen.getByText(/La contraseña debe de tener entre 4 y 16 digitos/i)
  // ).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText("Password");
  fireEvent.change(inputPassword, { target: { value: "123456" } });
  // const optionsRoles=screen.getByTestId('options-roles')
  // fireEvent.select(optionsRoles, { target: { value: 'admin' } })
  // fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal-create");
  // expect(screen.getByText(/Ya existe un usuario con ese email, revise por favor/i)).toBeInTheDocument()

  //screen.debug();
});

it("error create user", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);
  await screen.findByTestId("list");
  const icon = screen.getByTestId("AddCircleOutlineIcon");
  fireEvent.click(icon);

  expect(
    screen.getByText(
      /El correo debe cumplir con el siguiente formato usuario@example.com/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(/La contraseña debe de tener entre 4 y 16 digitos/i)
  ).toBeInTheDocument();

  // const inputPassword=await screen.findByPlaceholderText(
  //   /Password/i
  // );

  axios.post.mockImplementationOnce(() =>
    Promise.reject({
      response: {
        data: Error,
      },
    })
  );

  fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
  await screen.findByTestId("modal");
  expect(screen.getByText(/Intentelo de nuevo por favor/i)).toBeInTheDocument();

  //screen.debug();
});

it("create product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  await screen.findByTestId("listProducts");

  const buttonAddProduct = await screen.findByTestId("AddCircleOutlineIcon");

  axios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.newProduct,
    })
  );

  fireEvent.click(buttonAddProduct);
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAllAddNewProduct,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  const buttonGuardar = screen.getByRole("button", { name: "Guardar" });
  fireEvent.click(buttonGuardar);

  // AddCircleOutlineIcon
  await screen.findByTestId("listProducts");
  expect(screen.getByText("huevos")).toBeInTheDocument();

  //screen.debug();
});

it("edit product", async () => {
  localStorage.setItem("role", "admin");
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: data.dataAll,
      headers: {
        link: data.dataLink,
      },
    })
  );
  render(<Settings />);

  const products = screen.getByText(/Crear, modificar y eliminar productos/i);

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.dataAll,
      headers: {
        link: dataProducts.link,
      },
    })
  );
  fireEvent.click(products);

  await screen.findByTestId("listProducts");

  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dataProducts.productEdit,
      headers: {
        link: dataProducts.link,
      },
    })
  );

  const buttonsEditar = screen.getAllByRole("button", { name: /editar/i });
  fireEvent.click(buttonsEditar[0]);

  const history = createMemoryHistory();
  const route = "/editProduct/123";
  history.push(route);
  render(
    <Router location={history}>
      <EditProduct />
    </Router>
  );

  //screen.debug();
});

// it("edit user", async () => {
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

//   //screen.debug();
// });
