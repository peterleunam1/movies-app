import { OnScrollOptions } from "@/components/molecules/header/header.model";
import styled from "styled-components";

export const HeaderStyled = styled.header<OnScrollOptions>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  margin-bottom: 1.875rem;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-shadow: ${(props) => props.bshadow};
  z-index: 100;
  background-color: #10141f;
  transition: height ease 0.3s;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    span {
      &:last-of-type {
        width: 90%;
        margin-left: 0.5rem;
      }
    }
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 5%;
    &:hover {
      color: var(--secondary);
      transition: 0.5s ease color;
    }
  }
`;
