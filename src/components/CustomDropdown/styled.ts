import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const anima = keyframes`
 0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animaItens = keyframes`
 0%{
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }

`;

export const Container = styled.div`
  position: absolute;
  top: 40px;
  width: 653px;
  padding: 44px 48px;
  background: ${theme.colors.white};
  border-radius: ${theme.border.radius.small};
  animation: 0.5s ease 0s 1 normal none running ${anima};
  @media screen and (max-width: 1200px) {
    position: relative;
    top: 0;
    background: none;
    padding: 0 0 20px 0;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.font.size.xxsmall};
  color: ${theme.colors.purple};
  font-weight: ${theme.font.bold};
  line-height: 105%; /* 0.91875rem */
  letter-spacing: 0.13125rem;
  text-transform: uppercase;
  margin-bottom: ${theme.spacings.small};
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  gap: ${theme.spacings.small};
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;
  cursor: pointer;
  &:nth-child(1){
    animation: 0.3s ease 0s 1 normal none running ${animaItens};
  }
  &:nth-child(2){
    animation: 0.6s ease 0s 1 normal none running ${animaItens};
  }
  &:nth-child(3){
    animation: 0.9s ease 0s 1 normal none running ${animaItens};
  }
  &:nth-child(4){
    animation: 0.9s ease 0s 1 normal none running ${animaItens};
  }
  &:hover {
    transform: translateY(2px);
  }
`;

export const Text = styled.p`
  font-size: ${theme.font.size.xxsmall};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.black};
  line-height: 125%;
  letter-spacing: 0.075px;
  @media screen and (max-width: 1200px) {
    color: ${theme.colors.white};
  }
`;

export const SubText = styled.span`
  font-size: ${theme.font.size.xxxsmall};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.grey};
  @media screen and (max-width: 1200px) {
    color: rgb(221, 221, 221);
  }
`;
