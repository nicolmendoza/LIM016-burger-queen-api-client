import style from 'styled-components';
import {colors} from './elementos/Form.js'

export const Button = style.button`
    background: none;
    border: 1px solid ${colors.principal};
    font-weight: bold;
    font-size: 19px;
    padding: 4px;
    width: 7em;
    background: linear-gradient(#FFFFFF,#313131);
    -webkit-background-clip: text;
    color:  ${colors.parrafo};

    &:hover {
      background:  ${colors.principal};
      color:black;
}
`

export const ContainerProduts = style.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  color:white;
`

export const OrderDiv = style.div`
background: #6be86b40;
margin: 7%;
border-radius: 9px;
padding: 6%;
`

export const Container = style.div`
position: relative;
min-height: 100vh;
top: 0;
left: 78px;
width: calc(100% - 78px);
transition: all 0.5s ease;
z-index: 2;
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
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  height: calc(100vh - 168px);
  content-visibility: auto;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const DivElement = style.div`
    border:1px dashed white;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center
`