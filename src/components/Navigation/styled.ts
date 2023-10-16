import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

const anima = keyframes`
  from{
    opacity: 0;
    transform: translateX(20px);
  }to {
    opacity: 1;
    transform: translateX(0);

  }
`;

const animaMobile = keyframes`
from{
    opacity: 0;
    transform: translateY(-20px);
  }to {
    opacity: 1;
    transform: translateY(0);

  }

`

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
  animation: ${anima} 3s forwards;
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
    animation: ${animaMobile} 1s forwards;

    a {
      font-size: 100%;
      font-size: ${theme.font.size.small};
    }
    &:first-child {
      animation: 0.4s ease 0s 1 normal none running ${animaMobile};
      font-size: ${theme.font.size.small};
    }

  }
`;
