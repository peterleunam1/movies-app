import styled from "styled-components";

export const Figure = styled.figure`
  width: 300px;
  height: 450px;
  position: relative;
  z-index: 50;

  @media (max-width: 1000px) {
    width: 200px;
    height: 350px;
  }
`;
