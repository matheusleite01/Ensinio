import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
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
