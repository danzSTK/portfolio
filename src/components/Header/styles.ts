import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  display: none !important;
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

  /* background: radial-gradient(
    circle,
    rgba(2, 4, 16, 1) 0%,
    rgba(12, 4, 16, 0.22) 77%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); */
  backdrop-filter: blur(3px);
  background-color:rgba(0, 40, 85, 0.05);
  border: 1px solid rgba(242,242,242,.1);
  border-radius: 24px;
  transition: box-shadow 1s cubic-bezier(.23,1,.32,1),border .6s cubic-bezier(.165,.84,.44,1);
  box-shadow: 0 10px 25px #00000026;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-family: 'pacifico';
  background: linear-gradient(to right, #7b4397, #dc2430);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Links = styled.ul`
  display: flex;
  gap: 24px;
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
