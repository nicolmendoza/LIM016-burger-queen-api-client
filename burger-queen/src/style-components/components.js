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