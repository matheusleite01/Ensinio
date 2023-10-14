import styled from "styled-components";
import { theme } from "@/styles/theme";

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
`;

export const Text = styled.p`
  max-width: 416px;
  font-size: ${theme.font.size.small};
  color: ${theme.colors.white};
  font-weight: ${theme.font.medium};
  line-height: 150%;
  opacity: 0.9;
`;
