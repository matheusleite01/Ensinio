import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

const anima = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;
export const HeroContainer = styled.section`
  padding: 12rem 2rem 0 2rem;
  background: linear-gradient(85deg, #5f41d9 2.25%, #41b5d9 100.27%);
  @media screen and (max-width: 1066px) {
    padding: 10rem 1rem 0 1rem;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1066px) {
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${theme.spacings.medium};
  margin-top: ${theme.spacings.medium};
  animation: ${anima} 1.5s ease-in-out;
  button {
    font-size: ${theme.font.size.small};
    padding: 18px 32px;
    @media screen and (max-width: 345px) {
      padding: 12px 16px;
    }
    @media screen and (max-width: 286px) {
      padding: 12px 12px;
    }
  }
  @media screen and (max-width: 1066px) {
    justify-content: center;
  }
`;

export const spanVideo = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  gap: ${theme.spacings.xxxxsmall};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(3px);
  }
`;

export const CardContainer = styled.section`
  max-width: 1440px;
  margin: 104px auto 0 auto;
  padding: 10px;
  @media screen and (max-width: 480px) {
    margin: 50px auto 0 auto;
  }
`;
export const SubContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${theme.spacings.small};
  justify-content: space-between;
`;

export const SpanContent = styled.span`
  font-size: 1rem;
  color: ${theme.colors.grey};
  line-height: 150%;
`;

export const IconBg = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1623px;
  padding: 2px;
  margin: 0 auto;
  svg {
    &:nth-child(2) {
      position: relative;
      left: 232px;
      bottom: -36px;
    }
    &:nth-child(3) {
      position: relative;
      top: -32px;
      left: 100px;
    }
    &:nth-child(4) {
      position: absolute;
      top: -72px;
      left: 290px;
    }
  }
  @media screen and (max-width: 1067px) {
    display: none;
  }
`;
