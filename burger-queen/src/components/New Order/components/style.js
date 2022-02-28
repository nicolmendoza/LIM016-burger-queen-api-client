import styled, {css} from 'styled-components'
import colors from '../../../style-components/elementos/colors.js'
import SearchIcon from '@mui/icons-material/Search';

const ContainerMenu = styled.div`
    width: 77rem;
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    align-items: center;
    padding-left: 1rem;
    padding-top: 1.5rem;

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
const Icon = styled(SearchIcon)`
    color:white;
    font-size: 1.5rem !important;
    position:absolute;
    left: 4px;
    z-index:100;
    bottom: 1rem;
`
const ButtonMenu = styled.button`
    color:${colors.parrafo};
    background: none;
    padding: 0.6rem 0;
    border: 1.5px solid transparent;
    cursor:pointer;

    ${props => props.valid === 'false' && css `
    border-bottom: 1.5px solid ${colors.principal} !important;
    color: ${colors.principal} !important
    `}

    &:hover{
        border-bottom: 1.5px solid ${colors.principal};
        color: ${colors.principal}
    }
    
`

const ButtonCart = styled.button`
    color: ${colors.parrafo};
    background-image: linear-gradient(180deg, #F5B204 0%, #241A01 100%);
    border-radius: 8px;
    padding: ${props => props.padding || '12px'};
    font-size:0.8rem;
    border:1px solid ${colors.principal};
    width:100%;

    &:hover{
        border:1px solid ${colors.principal};
        color: ${colors.principal};
        background:none
    }
    
`

const ButtonClear = styled.button`
    color: ${colors.principal};
    border-radius: 8px;
    padding: ${props => props.padding || '12px'};
    font-size:0.8rem;
    border:1px solid #151515;
    background:none;

    &:hover{
        border:1px solid transparent;
        color: ${colors.parrafo};
        background:linear-gradient(180deg, #F5B204 0%, #241A01 100%)
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-row-gap: 0.5rem;
    grid-column-gap: 0.5rem;
    align-items:center;
    

    .Qty{
        width:100%;
        height:100%;
        text-align:center;
        padding: 0.5rem 0;
    }
    .totalPrice{
        text-align:center
    }
    input{
        border-radius:0.5rem;
        background:rgba(245, 246, 248, 0.22);
        width:100%;
        color:white;
        padding:0.8rem 1rem;
    }
`
const ListOrden = styled.div`
    max-height: calc(100vh - 14rem);
    content-visibility: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    grid-row-gap: 1rem;
    margin-top: 1rem;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {display: none;}
      
    &::-webkit-scrollbar-track {
        background: #000;
    }
      
    &::-webkit-scrollbar-thumb {
        background: #eacf4f;
        border-radius: 3.125rem;
    }
`
export {ContainerMenu, ContainerCart, Icon, ButtonMenu, ButtonCart, Item, ListOrden, ButtonClear}