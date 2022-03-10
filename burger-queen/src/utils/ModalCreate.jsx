import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {colors} from '../style-components/elementos/Form.js'

const ModalCreate = ({children, state, changeState, ...rest}) => {
    return (
        <>
            {state && 
            <Overlay>
                <Form background='rgb(255 255 255 / 53%)' {...rest}>
                    <BotonCerrar onClick={() => changeState(false)}> x </BotonCerrar>
                    {children}
                </Form>
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
const Form = styled.div`
    display:flex;
    position: relative;
    flex-direction:column;
    justify-content:center;
    background-color:${props => props.background || colors.background};
    height: 85%;
    border-radius: 1rem;
    border: 1px solid ${colors.border};
    box-shadow: -1px -1px 20px 1px ${colors.shadow} ;
    padding: 0.625rem 2%;
    width: 30rem
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

export default ModalCreate