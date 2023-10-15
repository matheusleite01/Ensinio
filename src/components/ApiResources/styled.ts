import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin: 4.188rem 0;
  @media screen and (max-width: 740px) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  max-width: 300px;
  flex: 1 0 200px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.black};
  line-height: 125%;
  letter-spacing: 0.1px;
  margin-bottom: ${theme.spacings.xxxsmall};
`;

export const Text = styled.p`
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.grey};
  line-height: 150%;
`;

export const ContainerSkeleton = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 2rem 1rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
