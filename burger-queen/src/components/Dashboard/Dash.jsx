import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container} from '../../style-components/components'
import Sidebar from "../Navegador";
import style from 'styled-components'
import UserInfo from '../New Order/components/User'
import StatusCard from './Card'
import { functionRanking } from "./ranking";
import StatusChart from "./graphics2";
import back from "../../img/back.webp"
import Loader from '../../utils/Loader'

const DashBoard = () => {
    const roleUser = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    const [totalGanancias, setTotalGanancias] = useState(0);
    const [totalDishes, setTotalDishes] = useState('')
    const [totalClients, setTotalClients] = useState('')
    const [dataUsers, setDataUsers] = useState([]);
    const [rankingDishes, setRankingDishes] = useState([]);
    const [rankingStatus, setRankingStatus] = useState([]);
    const [loading, setLoading] = useState(true);

    let config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
    };
    
     useEffect(() => {
        getOrders();
    }, []); 
    
    const getOrders = async () => {
    try{ 
        const response = await axios.get(
          "https://bq-api-2022.herokuapp.com/orders?limit=100",
          config
        );
        let ganancias = 0;
        const totalEarnings = response.data.map(
            (x) => x.products.map((y) => {
                const qty = y.qty;
                const price = y.product.price;
                ganancias += qty * price;
                return ganancias;
              })[x.products.length - 1]
        )[response.data.length - 1]
        
        setTotalGanancias(totalEarnings)

        let numDish = 0;
        const totalDish = response.data.map(
            (x) => x.products.map((y) => {
                const qty = y.qty;
                numDish += qty;
                return numDish;
              })[x.products.length - 1]
        )[response.data.length - 1]

        setTotalDishes(totalDish)
        setTotalClients(response.data.length)
        setDataUsers(
            response.data.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        )
        topDishes(response.data)
        topStatus(response.data)
        setLoading(false)
    } catch(err) {
        console.log(err)
    }
    }

    const topDishes = (data) => {

        const arrayArrays = data.map((x) =>
            x.products.map((y) => {
                const productArr={
                    img:y.product.image,
                    product:y.product.name, 
                    qty: y.qty}
                return productArr
                })
        );

        const merged = [].concat.apply([], arrayArrays);

        const countProducts = [...merged.reduce((r, e) => {
            let k = `${e.product}`;
            if(!r.has(k)) r.set(k, {...e, count: 1})
            else r.get(k).count++
<<<<<<< HEAD
            return r; 
          }, new Map).values()]
=======
            return r;
          }, new Map()).values()]
>>>>>>> a0e20a392820b7d6718ec2c127f0778f696e9b9e

        const totalXdishes = countProducts.map((x) => {
            const totalDishes={
                img:x.img,
                product:x.product, 
                total: x.count*x.qty}
            return totalDishes
        })

        setRankingDishes(totalXdishes.sort(function (a, b){
            return (b.total - a.total)
        }))
    }

    const topStatus = (data) =>{
        const resultOrderStatus = data.map((x) => x.status).sort();
        const rankingStatus = functionRanking(resultOrderStatus);
        setRankingStatus(rankingStatus);
    }

    const salesReport = [
        {
            "icon": "bx bx-shopping-bag",
            "count": `S/. ${totalGanancias}.00`,
            "title": "Total Ingresos"
        },
        {
            "icon": "bx bx-cart",
            "count": `${totalDishes}`,
            "title": "Total platos vendidos"
        },
        {
            "icon": "bx bx-dollar-circle",
            "count": `${totalClients}`,
            "title": "Total Clientes"
        }
    ]

    const handleBackground = (status) => {
        if (status === "pending") return "rgba(7, 120, 45, 0.75)";
        if (status === "canceled") return "rgba(114, 22, 22, 0.75)";
        if (status === "delivering") return "rgba(112, 114, 22, 0.75)";
        if (status === "delivered") return "rgba(22, 108, 114, 0.75)";
      };


    const Table = () => {
        return (
          <ContainerTable class="table table-hover" >
            <THead>
              <tr>
                <th className='client'>Cliente</th>
                <th  className='order'>Menu</th>
                <th className='pago' >Total S/.</th>
                <th className='status'>Status</th>
              </tr>
            </THead>
            <tbody>
              {dataUsers.map((x) => (
                <tr class="table-active">
                  <td className='client'>{x.client}</td>
                  <td className='order'>
                      {x.products[0].product.name} ...
                  </td>
                  <td className='pago'>
                    {x.products.map((y) => (
                      <p>S/ {y.product.price * y.qty}</p>
                    ))}
                  </td>
                  <td className='status'><Status className='status-p' color={handleBackground(x.status)}>{x.status}</Status></td>
                </tr>
              ))}
            </tbody>
          </ContainerTable>
        );
      };

    return(
        <>
        <Sidebar value={`${roleUser}`}></Sidebar>
        <Container background={back} valid='true' >
        {loading? <Loader/>:
        <ContainerDash>
            <Column width='65%'>
                <UserInfo/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                    {
                    salesReport.map((item, index) => (
                            <StatusCard
                                icon={item.icon}
                                count={item.count}
                                title={item.title}
                            />
                    ))
                    }
                </div>
                <ContainerGraphic  data-testid="table">
                    <Title>Reporte de Ordenes</Title>
                    <Table/>
                </ContainerGraphic>
            </Column>
            <Column width='35%'>
                <ContainerGraphic>
                    <Title>Platillos más ordenados</Title>
                    <List>
                    {rankingDishes.map((x)=>(
                        <div className='container-product'>
                        <img src={x.img} style={{ width: 70, height: 70 }} alt={x.product} />
                        <div className='container-info'>
                          <p style={{ fontSize: '14px'}}>{x.product}</p>
                          <p style={{ fontSize: '12px', color: '#898989'}}>{x.total} platos ordenados</p> 
                        </div>
                        </div>
                    ))}</List>
                </ContainerGraphic>
                <ContainerGraphic>
                    <Title>Ranking de tipo de orden</Title>
                    <StatusChart rankingStatus={rankingStatus} />
                </ContainerGraphic>
            </Column>
        </ContainerDash>}
        </Container>
        </>   
    )
}

const ContainerDash = style.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 1.5%;
    grid-column-gap: 1.5rem;
    color:white;
    position:relative;
`

const Column = style.div`
    width: ${props => props.width || '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ContainerGraphic = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #111111;
    border-radius: 8px;
    padding: 2rem 1.5rem 0;
`
const List = style.div`
    max-height: 30vh;
    content-visibility: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    grid-row-gap: 1rem;
    /* margin-top: 1rem; */
    padding-bottom: 0.5rem;
    width: 100%;
    margin-bottom: 1rem;

    &::-webkit-scrollbar {
        width:0.3rem;
      }
      
      &::-webkit-scrollbar-track {
        background: #000;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #eacf4f;
        border-radius: 3.125rem;
      }

    .container-product{
        display: flex;
        width: 100%;
        grid-column-gap: 1rem;
    }

    .container-info{
        padding-top: 0.8rem;
        line-height: 1.4rem;
    }
`

const Title = style.p`
    width: 100%;
    font-size: 1.25rem;
    font-weight: 500;
    padding-bottom: 1rem;
`
const ContainerTable = style.table`
    width:100%;
    border-spacing: 0;
    text-align:center;

    tbody{
        display:block;
        height: 47vh;
        overflow-y: auto;
        overflow-x: auto;

    }

    tbody::-webkit-scrollbar {display: none;}
      
    tbody::-webkit-scrollbar-track {
        background: #000;
    }
      
    tbody::-webkit-scrollbar-thumb {
        background: #eacf4f;
        border-radius: 3.125rem;
    }

    tr{
        height:3rem
    }

    .client{
        width: 22%;
        
    }

    .order{
        width: 40%;
    }

    .pago{
        width: 15%;
    }
    .status{
        width: 12rem;
    }
`

const THead = style.thead`
display: block;
width: 100%;
border-bottom: 0.5px solid #2f2f2fab;

`
const Status = style.p`
width: fit-content;
padding: 0.1rem 1rem;
background:${props => props.color || 'red'};
border-radius: 1rem;
margin: auto;
`



export default DashBoard