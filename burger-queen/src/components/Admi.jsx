import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import {Link} from 'react-router-dom'
import {Button} from '../style-components/components'   

const Admi = () => {
  // const [url, setUrl] = useState('https://bq-api-2022.herokuapp.com/users');
  const url = 'https://bq-api-2022.herokuapp.com/users';
  const token = localStorage.getItem("token");
  
  const header = {
    headers: { 
    Authorization: `Bearer ${token}`,
  }
}
  const initial = {
    users: [],
  };
  
  const initialLink = {
    first:'',
    prev: '',
    next: '',
    last:''
  };
  const [page, setPage] = useState(initialLink);

  const [state, setSate] = useState(initial);

  useEffect(() => {
    getUsers(url)})

  const getUsers = (url) => {
    axios.get(url, header).then((response) =>{
      const link = response.headers.link
      const arrayLink = link.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
      setPage((old) => ({
        ...old,
        first:arrayLink[0],
        prev: arrayLink[1],
        next: arrayLink[2],
        last: arrayLink[3]
      }))
      setSate((old) => ({
        ...old,
        users: response.data,
      }))
    }
    );
  };

  const handlePagination = (e) => {
    console.log(e.target.value)
    let pageNumber = e.target.value
    axios.get(pageNumber, header).then((response) =>{
      const link = response.headers.link
      const arrayLink = link.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
      setPage((old) => ({
        ...old,
        first:arrayLink[0],
        prev: arrayLink[1],
        next: arrayLink[2],
        last: arrayLink[3]
      }))
      setSate((old) => ({
        ...old,
        users: response.data,
      }))
    }
    );
  }

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
        <Button type="submit" className="btn-login" value={page.prev} onClick={handlePagination}> Prev </Button>
        <Button type="submit" className="btn-login"  value={page.next} onClick={handlePagination}> Next </Button>
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
