import React, {useState}from "react";
import {Label, Input, GroupInput, LeyendaError, DivInput} from '../style-components/elementos/Form' 

const ComponentInput = ({icon,type, label, placeholder, name, error, expReg, estado, changeState, eye, color }) => {
  
  const [valid, setValid] = useState('');

  const  onChange = (e) =>{
    changeState(e.target.value)

  }

  const validation = () => {
    if (expReg) {
      if(expReg.test(estado)) {
        //console.log('true')
        setValid('true')
      } else {
        setValid('false')
        //console.log('false')
      }
    }
  }



  return (
        <DivInput>
            <Label htmlFor={name} display={label}>{label}</Label>
            <GroupInput>
              {icon}
              <Input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                value={estado}
                onChange={onChange}
                onKeyUp = {validation}
                onBlur = {validation}
                valid={valid}
                color={color}
              />
              {eye}
            </GroupInput>
            <LeyendaError valid={valid}>{error}</LeyendaError>
          </DivInput>
    )
}

export default ComponentInput