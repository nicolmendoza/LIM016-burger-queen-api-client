import React, { useEffect, useState } from "react";
import axios from "axios";
import {getAllProducts, deleteProduct} from '../services/products'
import CreateProduct from "./CreateProduct";
import {Link} from 'react-router-dom'
import { Button } from "../style-components/components";

const Products = () => {
  const firstUrl='https://bq-api-2022.herokuapp.com/products'
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const initialLink = {
    first:'',
    prev: '',
    next: '',
    last:''
  };
  const [url, setUrl] = useState(firstUrl);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(initialLink);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getProducts(url)
    }, 2000);
  }, []);

  const getProducts = (url) => getAllProducts(url)
        .then((products) => {
          const link = products.headers.link
          const arrayLink = link.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
          setPage((old) => ({
            ...old,
            first:arrayLink[0],
            prev: arrayLink[1],
            next: arrayLink[2],
            last: arrayLink[3]
          }))
          setProducts(products.data)
          setLoading(false)
  })

  const handlePagination = (e) => {
    console.log(e.target.value)
    let pageNumber = e.target.value
    getProducts(pageNumber)
    setUrl(pageNumber)
  }
  
  const handleDelete = async (id) => {
    
    const res = await deleteProduct(firstUrl, id, options)
    console.log(res)
    getProducts(url)
}

  return (
    <div>
      <CreateProduct getProducts={getProducts}></CreateProduct>
      <h1>Productos</h1>
      {loading ? "Cargando..." : ""}
      <div className="container ">
        <Button type="submit" className="btn-login" value={page.prev} onClick={handlePagination}> Prev </Button>
        <Button type="submit" className="btn-login"  value={page.next} onClick={handlePagination}> Next </Button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Imagen</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr className="table-active" key={product._id}>
                <th scope="row">
                  {product.name}
                </th>
                <td>{product.price}</td>
                <td>
                  <img style={{width: 150, height: 150}} src={product.image} alt={product.name}/>
                </td>
                <td>
                  {product.type}
                </td>
                <td>
                  <Link to={"/editProduct/" + product._id}>Editar</Link>
                </td>
                <td>
                  <button onClick={() => {handleDelete(product._id)}}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Products;
