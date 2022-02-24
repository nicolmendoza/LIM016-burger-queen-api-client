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
    background:rgb(255 255 255 / 23%);;
    display:flex;
    flex-direction:column;
    align-items: center;
    text-align:center;
    padding: 0.625rem 0.625rem;
    border-radius:1.25rem;
    height:12.5rem;
    
    img{
        width:8.5rem;
        height:8.5rem;
        margin-top:-4rem
    }
`
export default DivData