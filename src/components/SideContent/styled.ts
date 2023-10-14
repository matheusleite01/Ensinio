import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.purple};
  line-height: 105%;
  letter-spacing: 2.4px;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 40px;
    height: 1px;
    opacity: 0.5;
    background: #5f41d9;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.black};
  line-height: 125%; /* 40px */
  letter-spacing: 0.16px;
  @media screen and (max-width: 900px ){
    font-size: 22px;
  }
`;
