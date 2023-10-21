import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 40px 10px 110px 10px;
  border-top: 1px solid #e7e7e9;
  @media screen and (max-width: 480px) {
    padding: 40px 10px;
  }
`;

export const Rocket = styled.p`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.xsmall};
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.medium};
  color: ${theme.colors.grey};
  line-height: 150%;
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`;

export const SeeMore = styled(Rocket)`
  color: ${theme.colors.purple};
  font-weight: ${theme.font.bold};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateX(5px);
  }
`;
