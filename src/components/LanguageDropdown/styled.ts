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

const animaButton = keyframes`
 0%{
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 43px;
    right: 100px;
  }
`;

export const LanguageDefault = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.xxxxsmall};
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(2px);
  }
`;

export const BgLanguage = styled.div`
  position: absolute;
  top: 50px;
  background: ${theme.colors.white};
  border-radius: 8px;
  animation: 0.5s ease 0s 1 normal none running ${anima};
`;

export const ButtonLanguage = styled.button`
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: 1s ease 0s 1 normal none running ${animaButton};
  margin: 0 !important;
  &.active {
    background: linear-gradient(
      90deg,
      rgb(95, 65, 217) -880.48%,
      rgba(95, 65, 217, 0) 100%
    );
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgb(95, 65, 217) -880.48%,
      rgba(95, 65, 217, 0) 100%
    );
  }
  &:first-child {
    border-radius: 8px 8px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.625rem;
  color: ${theme.colors.grey};
  font-size: ${theme.font.size.xsmall};
  font-style: normal;
  font-weight: 500;
  line-height: 105%; /* 15.75px */
`;
