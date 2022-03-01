import React, { useEffect, useState } from "react";
import {getAllProducts, deleteProduct} from '../services/products'
import CreateProduct from "./CreateProduct";
import { Button3, ContainerElements, DivElement, ButtonMenu} from "../style-components/components";
import DivData from '../utils/Container-Data'

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
  const [stateModal, setStateModal] = useState(false)

  useEffect(() => {
      getProducts(url)
  }, []);

  const getProducts = (url) => getAllProducts(url, options, setLoading)
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
      <h1>Productos</h1>
        <div className='btn-next-prev'>
        <ButtonMenu type="submit" className="btn-login" value={page.prev} onClick={handlePagination}> Prev </ButtonMenu>
        <ButtonMenu type="submit" className="btn-login"  value={page.next} onClick={handlePagination}> Next </ButtonMenu>
        </div>
        {loading ? "Cargando..." : <ContainerElements>
          <DivElement>
            <CreateProduct getProducts={getProducts}/>
            <p>Add new product</p>
          </DivElement>
          {products.map((product) => (
            <DivData key={product._id} data={product}>
                <div>
                <p>{product.type}</p>
                <p>{product.name}</p>
                <p>s/. {product.price}</p>
                </div>
                <div className='btn-container'>
                <Button3 color="black" padding="0.2rem 0.5rem" onClick={() =>{window.location.href = `/editProduct/${product._id}`}}>Editar</Button3>
                <Button3 color="black" padding="0.2rem 0.5rem" onClick={() => {handleDelete(product._id)}}>Eliminar</Button3>
                </div>
            </DivData>
          ))}
        </ContainerElements>}
    </div>
    );
};

export default Products;
