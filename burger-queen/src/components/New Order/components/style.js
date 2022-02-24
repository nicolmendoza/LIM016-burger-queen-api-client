import styled from 'styled-components'
import colors from '../../../style-components/elementos/colors.js'

const ContainerMenu = styled.div`
    width: 77rem;
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    align-items: center;

    @media (max-width: 760px){
        width: 40rem}
`
const ContainerCart = styled.div`   
    height: 100vh;
    /* margin: auto 0px auto 10px; */
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    background:${colors.container};
    width: 34rem
`


export {ContainerMenu, ContainerCart}