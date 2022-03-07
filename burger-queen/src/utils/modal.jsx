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


    position: fixed;
    // display: -webkit-box;
    // display: -webkit-flex;
    // display: -ms-flexbox;
    display: flex;
    // -webkit-align-items: center;
    -webkit-box-align: center;
    // -ms-flex-align: center;
    align-items: center;
    // -webkit-box-pack: center;
    -ms-flex-pack: center;
    // -webkit-justify-content: center;
    justify-content: center;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 4;
`
    // width: 100vw;
    // height: 100vh;
    // position: fixed;
    // top:-10rem;
    // left:-10rem;
    // background: ${colors.principal};
    // padding: 3rem; 
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // z-index:4

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