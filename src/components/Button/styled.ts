import styled from "styled-components";
import { theme } from "@/styles/theme";
import { ButtonProps } from ".";


export const ButtonStyled = styled.button<ButtonProps>`
  font-size: ${theme.font.size.xsmall};
  font-weight: ${theme.font.bold};
  line-height: 105%;
  color: ${({color}) => color};
  padding: 12px 24px;
  background: ${({backgroundColor}) => backgroundColor};;
  border: ${({border}) => border};;
  border-radius: ${theme.border.radius};
  cursor: pointer;
  transition: all .2s;

  &:hover{
    transform: perspective(2px) scale(1.090);
  }
`
