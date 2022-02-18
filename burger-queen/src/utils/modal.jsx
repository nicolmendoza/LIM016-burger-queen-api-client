import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({children, state, changeState}) => {
    return (
        <>
            {state && 
            <Overlay>
                <ContenedorModal>
                    <BotonCerrar onClick={() => changeState(false)}> x </BotonCerrar>
                    {children}
                </ContenedorModal>
            </Overlay>}
        </>
    )
}

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgb(247 242 242 / 50%);
    padding: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:4
`

const ContenedorModal = styled.div`
    width: 400px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    z-index: 100;
    padding: 14px 0px;
`

const BotonCerrar = styled(CloseIcon)`
    position: absolute;
    top:20px;
    right: 20px;
    color:#03a788c7;
    width:30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 50%;

    &:hover{
        background: linear-gradient(#2DFFB3,#012417);;
        color:white
    }
`


export default Modal