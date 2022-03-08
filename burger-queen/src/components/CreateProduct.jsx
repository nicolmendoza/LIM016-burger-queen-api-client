import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {createProduct} from '../services/products'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { display } from "@mui/system";
import {
  Button,
  ButtonModal,
  ContentModal,
} from "../style-components/components";


const CreateProduct = ({getProducts}) => {
    const [stateModal, setStateModal] = useState(false);
    // const [state, setState] = useState(initial);
    const url='https://bq-api-2022.herokuapp.com/products'
    const token = localStorage.getItem("token");
    let options = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
    };


    const initial = {
        name: "",
        price: "",
        image: "",
        type:''
    };

    const [newProduct, setNewProduct] = useState(initial);

    const onChangeInput = (e) => {
        setNewProduct((old) => ({
          ...old,
          [e.target.name]: e.target.value,
        }));
    };
    

    const handleSubmit = async (e) => {
        try{
     e.preventDefault();
        const res = await createProduct(newProduct, options)
        console.log(res)
        setStateModal(false)
        getProducts(url)  
        }
        catch(e){
            console.log(e)
        }

    }
    
    return (
        <>
        <ContentModal>
            <form className="container" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="exampleInputName" className="form-label mt-4">
                Nombre
            </label>
            <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                onChange={onChangeInput}
            />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPrice" className="form-label mt-4">
                Precio
            </label>
            <input
                type="number"
                name="price"
                className="form-control"
                id="exampleInputPrice"
                placeholder="Enter price"
                onChange={onChangeInput}
            />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputImage" className="form-label mt-4">
                Imagen
            </label>
            <input
                type="text"
                name="image"
                className="form-control"
                id="exampleInputImage"
                placeholder="Choose an image"
                onChange={onChangeInput}
            />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputType" className="form-label mt-4">
                Tipo
            </label>
            <input
                type="text"
                name="type"
                className="form-control"
                id="exampleInputType"
                placeholder="Enter a type"
                onChange={onChangeInput}
            />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary" >
                Guardar
            </button>
            </div>
            </form>
            </ContentModal>
</>

    )
}

export default CreateProduct;