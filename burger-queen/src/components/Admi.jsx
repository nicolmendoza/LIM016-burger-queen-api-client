import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import {Link} from 'react-router-dom'
import {Button} from '../style-components/components'   

const Admi = () => {
  const [page, setPage] = useState('next');
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  
  const header = {
    headers: { 
    Authorization: `Bearer ${token}`,
    Link
  }
}
  const initial = {
    users: [],
  };
  
  // const initialLink = {
  //   first:'',
  //   prev,
  //   next, 
  //   last
  // };

  const [state, setSate] = useState(initial);

  useEffect(() => {
    getUsers();
  }, []);

  const handlePagination = (e) => {
    e.preventDefault()
    setPage(e.target.value)

  }
  const getUsers = () => {
    axios.get(`${url}/users?limit=20`, header).then((response) =>{
      console.log(response)
      setSate((old) => ({
        ...old,
        users: response.data,
      }))
    }
    );
  };

  const deleteUser = (id) => {
    axios
      .delete(`${url}/users/${id}`, header)
      .then((response) => console.log(response))
      .then(() => getUsers())
      .catch(e => console.log(e))
  };

  const updateUser = async (id) => {
      console.log(id);
    // let options = {
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // const res = await axios.put(
    //   `${url}/users/${id}`,
    //   {  roles: { admin: true  } },
    //   options
    // );
    // return console.log(res);
    window.location.href="/edit"
  };

  return (
    <div>
      <CreateUser getUsers={getUsers}></CreateUser>
      <div className="container ">
        <h5>Admi</h5>
        <Button type="submit" className="btn-login" value="prev" onClick={handlePagination}> Prev </Button>
        <Button type="submit" className="btn-login"  value="next"onClick={handlePagination}> Next </Button>
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
                  <Link to={"/edit/" + user._id} >Editar</Link>
                  
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
