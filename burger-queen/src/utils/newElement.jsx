import styled from 'styled-components'

const NewElement = ({title, children}) => {
    return(
        <DivElement>
            {children}
            <p>{title}</p>
        </DivElement>
    )
}

const DivElement = styled.div`
    border:1px dashed white;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center
`

export default NewElement