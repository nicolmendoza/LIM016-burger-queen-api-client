import React from 'react'
import styled from 'styled-components'
import colors from '../style-components/elementos/colors'

const Button2 = ({icon, title, description, value, changeState, active, setActive}) => {
    // const [active, setActive] = useState()

    return (
        <ButtonGroup key={value} active={active === value} onClick={() => {changeState(value); setActive(value)}} >
            <div>{icon}</div>
            <ContentButton>
                <h1>{title}</h1>
                <p>{description}</p>
            </ContentButton>
        </ButtonGroup>
    )
}

const ButtonGroup = styled.button`
    border:none;
    padding: 20px 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background:none;
    cursor:pointer;
    

    ${({active}) => active && `
      background: rgb(0 0 0 / 35%);
      color: black;
    `};

    &:hover{
        background: rgb(0 0 0 / 35%);
        color: black;
    }
`

const ContentButton = styled.div`
    display:flex;
    flex-direction:column;
    text-align: start;
    padding-left: 7px;

    h1{
        background: ${colors.gradient};
        -webkit-background-clip: text;
        color: transparent; 
        font-size:18px;
        margin-bottom:5px
    }
    p{
        color:white;
        font-size:12px
    }

`
export default Button2
