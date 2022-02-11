import style from 'styled-components'

export const Button = style.button`
    background: none;
    border: 1px solid #b2b2b2;
    font-weight: bold;
    font-size: 19px;
    padding: 4px;
    width: 7em;
    background: linear-gradient(#FFFFFF,#313131);
    -webkit-background-clip: text;
    color: transparent;

    &:hover {
      background: linear-gradient(#FFFFFF,#313131);
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