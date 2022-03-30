import React, { useEffect, useState } from "react";
//import { getAllProducts, deleteProduct } from "../services/products";
import Loader from '../utils/Loader'
import {
  Button3,
  ContainerElements,
  DivElement,
  ButtonMenu,
} from "../style-components/components";
import DivData from "../utils/Container-Data";
import axios from "axios";
import CreateProduct from "./CreateProduct";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalCreate from '../utils/ModalCreate'

const Products = ({setValue}) => {
  const firstUrl = "https://bq-api-2022.herokuapp.com/products";
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const initialLink = {
    first: "",
    prev: "",
    next: "",
    last: "",
  };
  const [url, setUrl] = useState(firstUrl);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(initialLink);
  const [stateModal, setStateModal] = useState(false);

  useEffect(() => {
    setLoading(true)
    getProducts(url);
   
  }, []);

  const getProducts = (url) => {
    setStateModal(false)
    getAllProducts(url, options)
   
  
  }

  const getAllProducts = async (url, header) => {
    try {
      const products = await axios.get(`${url}?limit=${50}`, header);
      const link = products.headers.link;
      //console.log(link);
      const arrayLink = link.match(
        /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
      );
      setPage((old) => ({
        ...old,
        first: arrayLink[0],
        prev: arrayLink[1],
        next: arrayLink[2],
        last: arrayLink[3],
      }));
      setProducts(products.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handlePagination = (e) => {
    //console.log(e.target.value);
    let pageNumber = e.target.value;
    getProducts(pageNumber);
    setUrl(pageNumber);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`${firstUrl}/${id}`, options);
    //console.log(res);
    setValue('products')
    return getProducts(url);
  };
  const onClick = () => {
    //console.log("hi");
    setStateModal(true);
  };
  return (
    <>
      <div>
        <h1>Productos</h1>
        <div className="btn-next-prev">
          <ButtonMenu
            type="submit"
            className="btn-prev"
            value={page.prev}
            onClick={handlePagination}
          >
            {" "}
            Prev{" "}
          </ButtonMenu>
          <ButtonMenu
            type="submit"
            className="btn-next"
            value={page.next}
            onClick={handlePagination}
          >
            {" "}
            Next{" "}
          </ButtonMenu>
        </div>
          <ContainerElements data-testid="listProducts">
          {loading ? 
          <Loader/> : 
            <>
            <DivElement>
            <AddCircleOutlineIcon onClick={() => onClick()} />
              <p>Add new product</p>
              
            </DivElement>
            {products.map((product) => (
              <DivData key={`${product._id}-"ID"`} data={product}>
                <div>
                  <p>{product.type}</p>
                  <p>{product.name}</p>
                  <p>s/. {product.price}</p>
                </div>
                <div className="btn-container">
                  <Button3
                    color="black"
                    padding="0.2rem 0.5rem"
                    onClick={() => {
                      window.location.href = `/editProduct/${product._id}`;
                    }}
                  >
                    Editar
                  </Button3>
                  <Button3
                    color="black"
                    padding="0.2rem 0.5rem"
                    onClick={() => {
                      handleDelete(product._id);
                    }}
                  >
                    Eliminar
                  </Button3>
                </div>
              </DivData>
            ))}
            </>}
          </ContainerElements>

      </div>
      <ModalCreate state={stateModal} changeState={setStateModal} data-testid="modal-create">
        <CreateProduct getProducts={getProducts} />
      </ModalCreate>
    </>
  );
};

export default Products;
