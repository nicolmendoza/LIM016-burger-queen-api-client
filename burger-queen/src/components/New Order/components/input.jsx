import React, {useState}from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Label, Input, GroupInput, DivInput} from '../../../style-components/elementos/Form'

const ComponentInput = ({icon,type, label, placeholder, name, estado, changeState, color }) => {
    const buscador = (e) => {
        const arrayInicial = estado;
        const array = arrayInicial.filter((x) =>
          x.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        changeState(array);
      };
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
                onChange={buscador}
                color={color}
              />
            </GroupInput>
          </DivInput>
    )
}

export default ComponentInput