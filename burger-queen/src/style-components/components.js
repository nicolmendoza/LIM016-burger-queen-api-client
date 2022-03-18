import style, {css} from 'styled-components';
import {colors} from './elementos/Form.js'
import color from './elementos/colors.js'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export const Button = style.button`
    background: none;
    border: 1px solid ${colors.principal};
    font-weight: bold;
    font-size: 19px;
    padding: 4px;
    width: 7em;
    background: linear-gradient(#FFFFFF,#313131);
    -webkit-background-clip: text;
    color: ${props => props.color || colors.parrafo};;

    &:hover {
      background:  ${colors.principal};
      color:black;
}

`

export const ButtonOrder = style.button`
  margin: auto;
  width: ${props => props.width ||'80%'};
  /* height: 100%; */
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background:${colors.principal};
  font-weight:600;
  border: 1px solid transparent;
  box-shadow: 1px 4px 3px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    background:none;
    color: ${colors.principal};
    border: 1px solid ${colors.principal}
  }
`

export const ContainerProduts = style.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  color:white;
  padding: 1rem 1rem 1rem 1rem;
  height: calc(100vh - 6.5rem);
  content-visibility: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  
    &::-webkit-scrollbar {
      width:0.3rem;
    }
    
    &::-webkit-scrollbar-track {
      background: #000;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #eacf4f;
      border-radius: 3.125rem;
    }
  

  @media (max-width: 1024px){
    grid-template-columns: repeat(3,1fr);}

    }


`

export const OrderDiv = style.div`
background: ${props => props.background || '#6be86b40'};
margin: 7%;
border-radius: 9px;
padding: 6%;
position:relative;
box-shadow: 0px 0px 8px 6px rgba(0, 0, 0, 0.25);


`

export const Container = style.div`
background-image:url(${props => props.background || '../img/back.jpg'});
position: relative;
min-height: 100vh;
top: 0;
left: 78px;
width: calc(100% - 78px);
transition: all 0.5s ease;
z-index: 2;
background-size: cover;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;

${props => props.valid === 'true' && css `
  &:before {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.background};
  }
  `};

}
`

export const ButtonModal = style.button`
  display: block;
  padding: 0.5rem 1.4rem;
  border-radius: 6.25rem;
  color: #fff;
  border: 1px solid;
  background:${colors.principal};
  cursor: pointer;
  font-weight: 500;
  -webkit-transition: .3s ease all;
  transition: .3s ease all;
  outline:none;

  &:hover {
    background: none;
    color:${colors.principal};
    border: 1px solid ${colors.principal};
    outline:none
  }
`

export const ContentModal = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;

export const ContainerElements = style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 5rem;
  padding-top:4.5rem;
  padding: 4.5rem 1rem 1rem 1rem;
  height: calc(100vh - ${props => props.height || 10}rem);
  content-visibility: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (max-width: 1024px){
    grid-template-columns: repeat(2,1fr);}
  
    &::-webkit-scrollbar {
      width:0.3rem;
    }
    
    &::-webkit-scrollbar-track {
      background: #000;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #eacf4f;
      border-radius: 3.125rem;
    }
    @media (max-width: 768px){
      grid-template-columns: repeat(1,1fr);}
  
      }
  

`

export const DivElement = style.div`
    border:1px dashed white;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;

    &:hover{
      border:1px dashed ${colors.principal};
    }
`

export const Button3 = style.button`
  color: ${props => props.color || colors.principal};
  border-radius: 8px;
  padding: ${props => props.padding || '12px'};
  font-size:0.8rem;
  border:1px solid ${colors.principal};
  background:none;

  &:hover{
      border:1px solid transparent;
      color: ${colors.parrafo};
      background:linear-gradient(180deg, #F5B204 0%, #241A01 100%)
  }
`

export const ButtonMenu = style.button`
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

export const Input = style.input`
  width: 100%;
  height: 45px;
  border-radius: 3px;
  line-height: 45px;
  background: ${props => props.color || 'none'};
  padding: 0px 30px 0px 29px;
  border: 2px solid transparent;
  border-bottom: 1px solid ${colors.border};
  color: #d4d4d4a8;
  transition: 0.3s ease all;

  ${props => props.valid === 'false' && css `
      border: 2px solid ${colors.error} !important;
  `}
`

export const LeyendaError = style.p`
    font-size: 0.8rem !important;
    margin-bottom: 0;
    color: ${colors.error};
    display:none

    ${props => props.valid === 'false' && css `
        display:block
    `}
` 
export const GroupTab = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

export const Tab = style.button`
    padding: 0.62rem 3.75rem;
    cursor: pointer;
    color: white;
    background:none;
    border:0;
    outline:0;
    text-transform: uppercase;

    ${({active}) => active && `
      border-bottom: 2px solid ${colors.principal};
      color: ${colors.principal}
    `};

    ${props => props.responsive === 'true' && css `
    padding: 0.62rem 3rem;

    @media (max-width: 1024px){
      padding: 0.62rem 1rem;
      text-transform: capitalize;
    }`}

`

export const Label = style.label`
  color:rgba(229, 161, 6, 0.8);
  font-weight:500;
  min-height:40px;
  cursor:pointer;
  width: 7rem;
`

export const Icon = style.i`
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
  color: rgba(229, 161, 6, 0.8);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;

  ${({active}) => active && `
      background-image:${color.gradient};
      color: black;
    `};
  

`
export const User = style(AccountCircleIcon)`
  color: #755707;; 
`

export const Product = style(FastfoodIcon)`
  color: #755707;; 
`