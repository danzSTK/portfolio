import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../styles";

const downloadEffect = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
    opacity: 0;
  }
  51% {
    transform: translateY(-22px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

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
`;

export const HeroContainer = styled.div`
  scroll-behavior: smooth;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 50px;
    height: 100vh;
  }
`;

export const ContentLeft = styled.article`
  display: block;
  max-width: 600px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 26px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export const ContentRight = styled.article`
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
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 50%;
    }
  }
`;

export const ActionBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 16px;
  gap: 24px;
  font-weight: 500;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    gap: 10px;
    color: ${colors.text.primary};
    text-decoration: none;
    font-size: 24px;
    padding: 10px 24px;
    border-radius: 10px;
    background-color: rgba(118, 60, 172, 1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease;
    will-change: transform;
    transform: translateZ(0);

    &:hover {
      svg {
        animation: ${downloadEffect} 0.6s ease-in-out;
      }
      transform: scale(1.01);
    }
  }

  .contactLink {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    gap: 10px;

    color: ${colors.text.primary};
    text-decoration: none;
    font-size: 20px;
    padding: 10px 24px;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid rgba(242, 242, 242, 0.3);
    outline: none;
    transition: transform 0.4s ease;
    cursor: pointer;
    will-change: transform;

    &:hover {
      transform: scale(1.01);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 12px;
    a {
      font-size: 20px;
      height: 45px;
    }

    button {
      font-size: 20px;
      height: 45px;
    }
  }
`;

export const ArrowAnimate = styled.a`
  position: absolute;
  bottom: 10px;
  text-decoration: none;
  color: ${colors.text.secondary};

  animation: ${balanco} 2s linear infinite;
`;
