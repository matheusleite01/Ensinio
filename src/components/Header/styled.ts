import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  z-index: 1;
  @media screen and (max-width: 1200px) {
    padding: 2.25rem 2rem;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacings.small};
  padding: 0 1rem;
  @media screen and (max-width: 1200px) {
    overflow-y: hidden;
    overflow-x: hidden;
    button {
      &:nth-child(2) {
        margin: 10px auto;
      }
    }
  }
`;

export const NavContainer = styled(ItensContainer)`
  @media screen and (max-width: 1200px) {
    display: none;
  }

  &.openMenu {
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    flex-direction: column;
    padding: 7rem 3rem;
    background: linear-gradient(60deg, #16d4d9 -10%, #5f41d9 70%);
    z-index: 2;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background: #99f3f5;
  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 41px;
    right: 90px;
  }
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
  transition: all 0.2s;

  &:hover {
    transform: translateY(2px);
  }

  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 45px;
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  border-top: 2px solid ${theme.colors.white};
  width: 30px;
  cursor: pointer;
  z-index: 5;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background: ${theme.colors.white};
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }

  &.active {
    border-top-color: transparent;

    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
