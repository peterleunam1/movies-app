import styled from "styled-components";

export const IconStyled = styled.i<{
  size?: string;
  color?: string;
  hover?: string;
  withTooltip?: boolean;
  textTooltip?: string;
  opacity?: string;
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  position: relative;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hover};
    transition: 0.5s ease color;
  }

  &::after {
    content: "${(props) => props.textTooltip}";
    position: absolute;
    top: 0.1875rem;
    left: 1.9rem;
    background-color: var(--accent);
    color: white;
    padding: 0.3rem;
    border-radius: 0.5rem;
    opacity: ${(props) => props.opacity || 0};
    transition: 0.4s ease opacity;
    font-size: 0.62rem;
    font-weight: lighter;
    z-index: 10;
    @media (max-width: 800px) {
      left: -25px;
      top: -28px;
    }
  }
`;
