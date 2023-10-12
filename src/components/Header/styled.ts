import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2.25rem 2rem;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  z-index: 1;
`;

export const ItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacings.small};
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background: #99f3f5;
`;

export const ButtonEnter = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: ${theme.colors.white};
  font-weight: ${theme.font.bold};
  border: none;
  cursor: pointer;
  transition: all .2s;

  &:hover{
    transform: translateY(2px);
  }
` 
