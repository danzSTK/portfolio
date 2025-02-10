import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  z-index: 1;

  backdrop-filter: blur(3px);
  background-color: rgba(0, 40, 85, 0.05);
  border: 1px solid rgba(242, 242, 242, 0.1);
  border-radius: 24px;
  transition:
    box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1),
    border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 10px 25px #00000026;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
  }
`

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
`

export const Links = styled.ul`
  display: flex;
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Path = styled.a`
  position: relative;
  text-decoration: none;
  color: ${colors.text.primary};
  font-weight: 500;
  transition: 0.4s linear;

  &:hover {
    color: ${colors.text.secondary};
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    border-radius: 10px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(118, 60, 172, 1) 0%,
      rgba(118, 60, 172, 0.2) 77%,
      rgba(118, 60, 172, 0) 100%
    );
    transition:
      width 0.4s ease,
      left 0.4s ease;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  /* &:hover:before {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    //left: 0;
  } */
`
