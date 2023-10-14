import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.small};
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    
  }
`;

export const DropContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    
  }
`;

export const ListItens = styled.li`
  transition: all 0.2s;
  &:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  &:hover {
    transform: translateY(2px);
  }  
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 2rem 0px;
    border-top: 1px solid rgb(90, 147, 224);
    a {
      font-size: 100%;
      font-size: ${theme.font.size.small};
    }
    &:first-child {
      font-size: ${theme.font.size.small};
    }
  }
`;
