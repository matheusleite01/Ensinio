import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.small};
`;

export const ListItens = styled.li`
  transition: all .2s;
  &:first-child{
    display: flex;
    align-items: center;
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.white};
    line-height: 105%;
    opacity: 0.9;
    gap: ${theme.spacings.xxxxsmall};
    cursor: pointer;
  }
  a {
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.white};
    line-height: 105%;
    opacity: 0.9;
    
  }

  &:hover{
    transform: translateY(2px);
  }
`;
