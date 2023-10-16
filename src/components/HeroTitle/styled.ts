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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
  @media screen and (max-width: 1066px){
    align-items: center;
    text-align: center;
  }
`;

export const SpanContainer = styled(Container)`
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  animation: ${anima} 1.5s ease-in-out;
`;

export const SubText = styled.span`
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};
  line-height: 105%;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const Title = styled.h1`
  max-width: 499px;
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.medium};
  color: ${theme.colors.white};
  line-height: 110%;
  letter-spacing: -1.32px;
  animation: ${anima} 2s ease-in-out;
  @media screen and (max-width: 280px){
   font-size: 2.2rem;
  }
`;

export const Text = styled.p`
  max-width: 416px;
  font-size: ${theme.font.size.small};
  color: ${theme.colors.white};
  font-weight: ${theme.font.medium};
  line-height: 150%;
  opacity: 0.9;
`;
