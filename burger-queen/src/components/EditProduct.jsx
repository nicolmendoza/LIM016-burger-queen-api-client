import axios from "axios";
import React, { useEffect, useState } from "react";
import {editProduct, getOneProduct} from '../services/products'

const EditProduct = () => {
    const token = localStorage.getItem("token");
    const id = window.location.pathname.slice(13);
    console.log(id)

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

    const [product, setProduct] = useState(initial);

    useEffect((e) => {
        getProduct()
    }, []);

    const getProduct = () => {
        getOneProduct(id, options)
        .then((data) => {
            console.log(data)
            setProduct(data)
        })
        
    }

    const onChangeInput = (e) => {
        setProduct((old) => ({
          ...old,
          [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await editProduct(id, product, options)
        console.log(res)
        window.location.href = "/products";
    }

    return(
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
                value={product.name}
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
                value={product.price}
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
                value={product.image}
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
                value={product.type}
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
    )
}

export default EditProduct;