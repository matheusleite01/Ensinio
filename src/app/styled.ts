import styled from "styled-components";
import { theme } from "@/styles/theme";

export const HeroContainer = styled.section`
  padding: 10rem 2rem 0 2rem;
  background: linear-gradient(85deg, #5f41d9 2.25%, #41b5d9 100.27%);
`;

export const ImgBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 1200px) {
    display: none;
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
  button {
    font-size: ${theme.font.size.small};
    padding: 18px 32px;
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
`
export const SubContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${theme.spacings.small};
  justify-content: space-between;
`

export const SpanContent = styled.span`
font-size: 1rem;
    color: ${theme.colors.grey};
    line-height: 150%; 
`
