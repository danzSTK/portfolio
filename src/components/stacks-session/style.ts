import styled from "styled-components";
import { breakpoints, colors, StyledParagraph } from "../../styles";


export const ContainerTools = styled.article`
  margin: 16px 0;
`;

export const WrapperTools = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 16px 0;


  button {
    font-weight: 600;
    text-transform: lowercase;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${colors.text.third};
    padding: 16px;
    border-radius: 8px;
    transition: color 0.4s ease-out;
    cursor: pointer;

    &:hover {
      color: ${colors.text.primary};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const ToolsContent = styled.li`
  border-radius: 8px;
  padding: 8px 16px;
  background-color: rgba(0, 40, 85, 0.15);
  border: 1px solid rgba(242, 242, 242, 0.1);
  transition: transform 0.3s ease-out;


  &:hover {
    transform: scale(1.04);
    cursor: pointer;

    ${StyledParagraph} {
      span {
        color: ${colors.text.primary};
      }
    }
  }

  ${StyledParagraph} {
    font-size: 18px;
    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 16px;
  }
`;
