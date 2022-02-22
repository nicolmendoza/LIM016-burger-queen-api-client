import React from "react";
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
    padding: 10px 10px;
    border-radius:20px;

    img{
        width:150px;
        height:150px;
    }
`
export default DivData