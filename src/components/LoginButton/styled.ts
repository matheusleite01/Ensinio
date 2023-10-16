import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: ${theme.colors.white};
  font-weight: ${theme.font.bold};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(2px);
  }
  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 43px;
  }
`;
