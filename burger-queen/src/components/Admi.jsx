import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import { Button } from "../style-components/components";

const Admi = () => {
  const [page, setPage] = useState("next");
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      Link,
    },
  };
  const initial = {
    users: [],
  };
  const [links, setLinks] = useState();
  const [state, setSate] = useState(initial);

  const getLink = (type) => {
    if (type === "next") {
      const next = links.next;
      console.log(links.next);
      axios.get(`${next}`, header).then((response) => {
        console.log(response.data);
        setSate({ users: response.data });
      });
    } else {
      const prev = links.prev;
      console.log(links.prev);
      axios.get(`${prev}`, header).then((response) => {
        setSate({ users: response.data });
      });
    }
  };


  useEffect(() => {
    axios.get(`${url}/users`, header).then((response) => {
      console.log(response.headers.link);
      const array = response.headers.link.split(" ");
      console.log(array);
      const links = {
        first: array[0].slice(1, array[0].length - 2),
        prev: array[2].slice(1, array[2].length - 2),
        next: array[4].slice(1, array[4].length - 2),
        last: array[6].slice(1, array[6].length - 2),
      };
      console.log(links);
      const next = links.next;
      const prev = links.prev;
      setLinks({
        next: next,
        prev: prev,
      });
      console.log(next, prev);
    });
    getUsers();
  }, []);

  const handlePagination = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  const getUsers = () => {
    axios.get(`${url}/users?limit=20`, header).then((response) => {
      setSate((old) => ({
        ...old,
        users: response.data,
      }));
    });
  };

  const deleteUser = (id) => {
    axios
      .delete(`${url}/users/${id}`, header)
      .then((response) => console.log(response))
      .then(() => getUsers())
      .catch((e) => console.log(e));
  };

  const updateUser = async (id) => {
    console.log(id);

    window.location.href = "/edit";
  };

  return (
    <div>
      <CreateUser getUsers={getUsers}></CreateUser>
      <div className="container ">
        <h5>Admi</h5>
        <Button
          type="submit"
          className="btn-login"
          value="prev"
          onClick={() => getLink("prev")}
        >
          {" "}
          Prev{" "}
        </Button>
        <Button
          type="submit"
          className="btn-login"
          value="next"
          onClick={() => getLink("next")}
        >
          {" "}
          Next{" "}
        </Button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Correo</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {state.users.map((user) => (
              <tr className="table-active" key={user._id}>
                <th scope="row">
                  {user.roles.admin
                    ? "Admin"
                    : user.roles.name === "mesera"
                    ? "mesera"
                    : "cocinera"}
                </th>
                <td>{user.email}</td>
                <td>
                  <Link to={"/edit/" + user._id}>Editar</Link>
                </td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admi;
