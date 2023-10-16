import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

const animaLogo = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px);
  }to{
    pacity: 1;
    transform: translateX(0px);
  }
`;

const animaScroll = keyframes`
  from{
    opacity: 0;
  }to{
    pacity: 1;
  }
`;

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  z-index: 1;

  &.active {
    position: fixed;
    animation: none !important;
  }

  &.scroll {
    position: fixed;
    background: white;
    box-shadow: 0px 30px 40px rgba(95, 55, 180, 0.05);
    animation: ${animaScroll} 0.2s ease-in-out;
  }
`;

export const Logo = styled.div`
  animation: ${animaLogo} 2s ease-in-out forwards;
`;
export const ItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacings.small};
  padding: 0 1rem;
  animation: ${animaScroll} 1s ease-in-out;
  @media screen and (max-width: 1200px) {
    overflow-y: hidden;
    overflow-x: hidden;
    animation: ${animaScroll} 0.5s ease-in-out;

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
    top: 39px;
    right: 90px;
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
  &.scroll {
    border-top: 2px solid ${theme.colors.black};
    &::before {
      border-top: 2px solid ${theme.colors.black};
    }
    &::after {
      border-top: 2px solid ${theme.colors.black};
    }
  }
  &.active {
    position: relative;
    bottom: -9px;
    border-top-color: transparent;
    @media screen and (max-width: 280px) {
      position: absolute;
      bottom: 20px;
      right: 40px;
    }
    &::before {
      transform: rotate(135deg);
      border-top: 2px solid ${theme.colors.white};
    }
    &::after {
      transform: rotate(-135deg);
      top: -7px;
      border-top: 2px solid ${theme.colors.white};
    }
  }
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
