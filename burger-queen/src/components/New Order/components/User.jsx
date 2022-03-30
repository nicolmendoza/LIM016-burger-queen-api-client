import React from "react";
import apiData from '../../../services/api.js'
import styled from 'styled-components'

const UserInfo = () => {

    let date = new Date();
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
    const dateExact = `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`

    return (
        <ContainerUser>
            <p className='user'>{apiData.nameUser}</p>
            <p className='fecha'>{dateExact}</p>
        </ContainerUser>
    )
}

const ContainerUser = styled.div`
    line-height: 1.9rem;
    display: flex;
    flex-direction: column;
    color:white;
    position: relative;

    .user{
        font-size:1.9rem;
        font-weight: 500
    }

    .fecha{
        font-weight: lighter;
    }
`
export default UserInfo