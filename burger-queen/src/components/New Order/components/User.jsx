import React, { useEffect, useState } from "react";
import {userInfo} from '../../../services/users.js'
import apiData from '../../../services/api.js'
import styled from 'styled-components'

const UserInfo = () => {

    let date = new Date();
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
    const dateExact = `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`

    return (
        <ContainerUser>
            <p1>{apiData.nameUser}</p1>
            <p2>{dateExact}</p2>
        </ContainerUser>
    )
}

const ContainerUser = styled.div`
    line-height: 1.9rem;
    display: flex;
    flex-direction: column;

    p1{
        font-size:1.9rem;
        font-weight: 500
    }

    p2{
        font-weight: lighter;
    }
`
export default UserInfo