import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#fff",
  main: "#010208",
  purple: "#763CAC",
  text: {
    primary: "#fff",
    secondary: "#A362FF",
    third: "#CCD6F6"
  }
};

export const breakpoints = {
  descktop: "1200px",
  tablet: "1024px",
  mobile: "768px"
};

export const GlobalStyle = createGlobalStyle`
  html {
    //scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background: ${colors.main};
    color: ${colors.text.primary};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`;

export const StyledParagraph = styled.p<{ $size?: string }>`
  font-size: ${({ $size }) => $size || "16px"};
  color: ${colors.text.primary};
  font-weight: 200;

  span {
    font-weight: 500;
    color: ${colors.text.third};
  }
`;
