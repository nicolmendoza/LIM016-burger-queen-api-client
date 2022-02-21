import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {createProduct} from '../services/products'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CreateProduct = ({getProducts}) => {
    const url='https://bq-api-2022.herokuapp.com/products'
    const token = localStorage.getItem("token");
    const [open, setOpen] = React.useState(false);
    let options = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        e.preventDefault();
        handleClose()
        const res = await createProduct(newProduct, options)
        console.log(res)
        getProducts(url)
    }
    
    return (
    <div>
        <AddCircleOutlineIcon onClick={handleOpen}/>
        <Modal
            open={open}
            onClose={handleClose} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>

    )
}

export default CreateProduct;