import React, { Children } from "react";
import styled from 'styled-components'

const DivData = ({data, children}) => {
    return (
        <ContainerData>
            <img src={data.image} alt=''/>
            {children}
        </ContainerData>
    )
}

const ContainerData = styled.div`
    background: white;
    display:flex;
    flex-direction:column;
    align-items: center;
    text-align:center;
    padding: 10px 0px;
    border-radius:5px;

    img{
        width:100px;
        height:100px;
    }
`
export default DivData