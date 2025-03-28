import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Wrapper = styled.section`
  margin: 80px 0;
`;

export const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  background: radial-gradient(
    circle,
    rgba(2, 4, 16, 1) 0%,
    rgba(12, 4, 16, 0.22) 77%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Content = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  &.reverse {
    flex-direction: row-reverse;

    ${Description} {
      left: 50%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: row;

      ${Description} {
        left: auto;
      }
    }
  }

  img {
    width: 600px;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: unset;
    }

    ${Description} {
      gap: 50px;
      justify-content: center;
      max-width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(2, 4, 16, 1) 0%,
        rgba(12, 4, 16, 0.22) 77%,
        rgba(255, 255, 255, 0) 100%
      );
      backdrop-filter: blur(2px);
      text-shadow: 2px 6px 10px rgba(0, 0, 0, 1);

      h3 {
        font-size: 36px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 50px;
    ${Description} {
      gap: 10px;
      h3 {
        font-size: 24px;
      }
      p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;

export const ToolsContent = styled.article`
  display: flex;
  align-items: center;
  font-size: 24px;
  grid-gap: 16px;
  color: ${colors.text.third};

  svg:hover {
    transition: color 0.2s linear;
    color: ${colors.text.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const arrowEffect = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px); // Ícone desce suavemente
    opacity: 0; // Desaparece na descida
  }
  51% {
    transform: translateX(-12px); // Reposiciona acima
    opacity: 0; // Mantém invisível na parte superior
  }
  100% {
    transform: translateX(0);
    opacity: 1; // Ícone reaparece suavemente
  }
`;

export const PathContent = styled.article`
  display: flex;
  justify-content: end;

  a {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${colors.text.third};
    border-radius: 16px;
    border: 1px solid ${colors.text.third};
    padding: 8px 16px;
    max-width: 165px;
    transition: 0.2s linear;
    overflow: hidden;

    &:hover {
      border-color: ${colors.text.primary};
      color: ${colors.text.primary};
      scale: 1.01;

      svg {
        animation: ${arrowEffect} 0.6s ease-in-out;
      }
    }
  }
`;

export const ActionBar = styled.footer`
  display: grid;
  justify-content: flex-end;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
