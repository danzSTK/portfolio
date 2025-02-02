import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin: 24px;
  z-index: 1;

  background: radial-gradient(
    circle,
    rgba(2, 4, 16, 1) 0%,
    rgba(12, 4, 16, 0.22) 77%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
  text-decoration: none;
  color: ${colors.text.primary};
  font-weight: 500;
`
