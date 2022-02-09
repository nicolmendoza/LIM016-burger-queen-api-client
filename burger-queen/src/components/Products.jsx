import React, { useEffect, useState } from "react";
import axios from "axios";
import {getAllProducts, deleteProduct} from '../services/products'
import CreateProduct from "./CreateProduct";
import {Link} from 'react-router-dom'

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getProducts()
    }, 2000);
  }, []);

  const getProducts = () => getAllProducts(options)
        .then((products) => {
          setProducts(products)
          setLoading(false)
  })
  
  const handleDelete = async (id) => {
    
    const res = await deleteProduct(id, options)
    console.log(res)
    getProducts()
}

  return (
    <div>
      <CreateProduct getProducts={getProducts}></CreateProduct>
      <h1>Productos</h1>
      {loading ? "Cargando..." : ""}
      <div className="container ">
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
                  <button onClick={() => {handleDelete(product._id); getProducts()}}>Eliminar</button>
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
