import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../styles";


const FocusAnimation = keyframes`
  from {
    width: 0;
    border: 0px solid rgba(242, 242, 242, 0.1);
  }
  to {
    width: 100%;
    border: 1px solid rgba(242, 242, 242, 0.1);
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const NavLinks = styled.nav`
  padding: 8px 24px;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 40, 85, 0.05);
  border: 1px solid rgba(242, 242, 242, 0.1);
  border-radius: 24px;
  box-shadow: 0 10px 25px #00000026;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;

  img {
    width: 100%;
    filter: invert();
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 3rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Path = styled.a`
  position: relative;
  text-transform: capitalize;
  text-decoration: none;
  color: ${colors.text.primary};
  font-weight: 500;
  width: 100%;
  transition: text-shadow 0.4s linear;
  padding: 8px 16px;

  &:hover::before {
      content: '';
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      border-radius: 10px;
      height: 100%;
      background-color: rgba(0, 40, 85, 0.15);
      border: 1px solid rgba(242, 242, 242, 0.1);
      transition:
      width 0.4s ease,
      left 0.4s ease;
      transform: translate(-50%, -50%);
      z-index: -1;
  }

  /* &:hover::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    border-radius: 10px;
    height: 100%;
    background-color: rgba(0, 40, 85, 0.05);
    border: 1px solid rgba(242, 242, 242, 0.1);
    transition:
      width 0.4s ease,
      left 0.4s ease;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    padding: 6px;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    height: 100%;
    background-color: rgba(0, 40, 85, 0.10);
    border: 1px solid rgba(242, 242, 242, 0.1);
    transition:
      width 0.4s ease,
      left 0.4s ease;
    transform: translate(-50%, -50%);
    z-index: -1;
    //left: 0;
  } */

    &.active::before {
      animation: ${FocusAnimation} 0.4s ease-in-out forwards;
    }

  &.active {
    text-shadow: 0px 1px 8px;

    &::before {
      content: '';
      position: absolute;
      width: 0;
      left: 50%;
      top: 50%;
      border-radius: 10px;
      height: 100%;
      background-color: rgba(0, 40, 85, 0.15);
      border: 0px solid rgba(242, 242, 242, 0.1);
      transition:
      width 0.4s ease,
      left 0.4s ease;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

  }
`;

export const SocialPaths = styled.ul`
  display: flex;
  gap: 6px;

  a {
    color: ${colors.text.third};
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${colors.text.primary}
    }
  }
`;
