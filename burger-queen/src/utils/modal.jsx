import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {colors} from '../style-components/elementos/Form.js'

const Modal = ({children, state, changeState, ...rest}) => {
    return (
        <>
            {state && 
            <Overlay>
                <ContenedorModal {...rest}>
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
    background: ${colors.background};
    padding: 3rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:4
`

const ContenedorModal = styled.div`
    width: 25rem;
    min-height: 6rem;
    background: #fff;
    position: relative;
    border-radius: 0.3rem;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    z-index: 100;
    padding: 1rem 0;
`

const BotonCerrar = styled(CloseIcon)`
    position: absolute;
    top:0.5rem;
    right: 0.5rem;
    color:${colors.principal};
    width:30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 50%;

    &:hover{
        background: ${colors.principal};;
        color:white
    }
`


export default Modal