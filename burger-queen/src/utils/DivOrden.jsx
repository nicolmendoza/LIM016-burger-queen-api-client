import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {colors} from '../style-components/elementos/Form.js'
import { Button } from '@mui/material';

const Order = ({type, client, status, products, createdTime, waitTime}) => {
    const handleBackground = (status) => {
        if (status === "pending") return "rgba(7, 120, 45, 0.75)";
        if (status === "canceled") return "rgba(114, 22, 22, 0.75)";
        if (status === "delivering") return "rgba(112, 114, 22, 0.75)";
        if (status === "delivered") return "rgba(22, 108, 114, 0.75)";
      };

      const timeOrder = (createdTime) => {
        const timeValue = new Date(createdTime)
        var hours = timeValue.getHours();
        var minutes = timeValue.getMinutes();
        var seconds = timeValue.getSeconds();

        const time = `${hours}:${minutes}:${seconds}`
        console.log(time)
        return time
          
      };

      const dayCreate = (createdTime) => {
        const date = new Date(createdTime)
        const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
        const dateExact = `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
        console.log(dateExact)
        return dateExact
          
      };

    return(
        <DetailOrder  color={handleBackground(status)}>
            <h1 className="title">RESUMEN DE PEDIDO</h1>
            <p className='status'>{status}</p>
            <p className='type'>{`Tipo: ${type}`}</p>
            <p className='titleName'>Nombre del cliente:</p>
            <p className='nameClient'>{client}</p>
            <div className='detailProduct'>
            <table className='table'>
            <thead>
                <tr>
                    <th className='item'>
                       Item
                    </th>
                    <th>
                        Qty
                    </th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <>
                <tr key={product._id}>
                    <td className='item'>{product.product.name}</td>
                    <td className='qty'>{product.qty}</td>                              
                </tr>
                {product.comment ? (
                    <tr colspan="3">
                    {`Extra: ${product.comment}`}</tr>
                    ) : ("")}
                </>
                // <div className='listProduct' key={product._id}>
                //     <p>{product.product.name}</p>
                //     <p> Qty : {product.qty}</p>
                //         {product.comment ? (
                //         <p>Extra :{product.comment} </p>
                //         ) : ("")}
                //         </div>
            ))}
            </tbody>
            </table>
            </div>
                <p className='titleName'>Dia de creación:</p>
                <p className='time'>{dayCreate(createdTime)}</p>
            {
                status==='pending' ? (
                    <>
                    
                    <p className='titleName'>Hora de creación</p>
                    <p className='time'>{timeOrder(createdTime)}</p>
                    </>
                ) : status==='delivering'? <>
                <p className='titleName'>Tiempo de espera</p>
                <p className='time'>{waitTime}</p>
                </> : ''
            }
        </DetailOrder>
    )
}

const DetailOrder = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-row-gap: 0.8rem;
    grid-column-gap:0.5rem;
    width:100%;
    font-size:0.8rem;

    .title{
        font-size:0.9rem;
        grid-column: 1/6;
        text-align:center;
        text-decoration:underline;
    }
    .status{
        grid-column: 2/5;
        background:${props => props.color || 'red'};
        border-radius:0.5rem;
        text-align:center;
        text-transform:uppercase;
        padding: 0.2rem;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
    }
    .type{
        grid-column: 1/6;
    }
    .titleName{
        grid-column: 1/4;
    }
    .nameClient{
        grid-column: 4/6;
        text-transform:capitalize;
    }
    .detailProduct{
        grid-column: 1/6;
        background: #ddddddcc;
        border-radius:0.5rem;
        padding: 0.5rem 0.8rem;
        color:black;
        box-shadow: 0px 0px 8px 6px rgba(0, 0, 0, 0.25);
    }
    .time{
        grid-column:4/5
    }
    .item{
        width:90%
    }
    .table{
        width:100%
    }
    .qty{
        text-align:center;
    }
    tr{
        height: 1.5rem;
    }
`

export default Order