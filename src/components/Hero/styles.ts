import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  height: 100vh;
`

export const ContentLeft = styled.div`
  display: block;
  max-width: 600px;
  text-align: center;
`

export const ContentRight = styled.div`
  position: relative;
  display: flex;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle,
      rgba(118, 60, 172, 1) 0%,
      rgba(118, 60, 172, 0) 80%
    );
    z-index: -1;
    border-radius: 50%;
    filter: blur(80px);
  }
  img {
    position: relative;
    width: 450px;
  }
`

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 24px;
  font-weight: 500;

  a {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 10px;
    color: ${colors.text.primary};
    text-decoration: none;
    font-size: 24px;
    padding: 10px 24px;
    border-radius: 10px;
    //backdrop-filter: blur(20px);
    background: linear-gradient(
      to right,
      rgba(118, 60, 172, 1) 0%,
      rgba(118, 60, 172, 0.2) 77%,
      rgba(118, 60, 172, 0) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease;
    will-change: transform;
    transform: translateZ(0);

    &:hover {
      transform: scale(1.01);
    }
  }

  button {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 10px;

    color: ${colors.text.primary};
    text-decoration: none;
    font-size: 24px;
    padding: 10px 24px;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid;
    outline: none;
    transition: transform 0.4s ease;
    cursor: pointer;
    will-change: transform;

    &:hover {
      transform:scale(1.01);
    }
  }
`
const balanco = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
`

export const ArrowAnimate = styled.a`
  position: absolute;
  bottom: 40px;
  text-decoration: none;
  color: ${colors.text.secondary};

  animation: ${balanco} 2s linear infinite;
`

