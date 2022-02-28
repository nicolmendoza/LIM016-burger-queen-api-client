import styled, {css} from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export const colors = {
    background: "rgba(0, 0, 0, 0.87)",
    border: "#fff",
    error: "#bb2929",
    success: "#1ed12d",
    shadow: "rgb(255 255 255 / 43%)",
    letter:"white",
    principal: 'rgba(229, 161, 6, 0.8)',
    parrafo: 'white',
}

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color: ${colors.background};
    height: 60%;
    border-radius: 1rem;
    border: 1px solid ${colors.border};
    box-shadow: -1px -1px 20px 1px ${colors.shadow} ;
    padding: 0.625rem 2%;
    width: 30rem
`
export const DivInput = styled.div`
    margin-bottom: 15px
`
export const Label = styled.label`
    color:${colors.principal};
    font-weight:500;
    min-height:40px;
    cursor:pointer;

    ${props => props.display === 'none' && css `
        display:none !important;
    `}
`

export const GroupInput = styled.div`
    position: relative;
    z-index:3
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
    margin: 3% 0px;
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

export const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display:none

    ${props => props.valid === 'false' && css `
        display:block
    `}
` 
export const Icon = styled(EmailOutlinedIcon)`
    color:white;
    font-size: 18px !important;
    position:absolute;
    left: 4px;
    z-index:100;
    bottom: 22px
`

export const IconEye = styled(VisibilityOffRoundedIcon)`
    color: white;
    font-size: 25px !important;
    position: absolute;
    right: 10px;
    z-index: 100;
    bottom: 18px;
`

export const IconEyeClose = styled(RemoveRedEyeRoundedIcon)`
    color: white;
    font-size: 25px !important;
    position: absolute;
    right: 10px;
    z-index: 100;
    bottom: 18px;
`

export const Lock = styled(LockOutlinedIcon)`
    color:white;
    font-size: 16px !important;
    position:absolute;
    left: 4px;
    z-index:100;
    bottom: 20px
`