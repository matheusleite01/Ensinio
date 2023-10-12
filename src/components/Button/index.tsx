import React from 'react';
import {ButtonStyled} from './styled';

export type ButtonProps = {
  children: React.ReactNode
  backgroundColor?: string;
  color?: string;
  border?: string

}

const Button = ({children, backgroundColor, color, border}: ButtonProps) => {
  return (
    <ButtonStyled backgroundColor={backgroundColor} color={color} border={border}>{children}</ButtonStyled>
  )
}

export default Button