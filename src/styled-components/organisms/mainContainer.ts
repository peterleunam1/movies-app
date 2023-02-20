import styled from "styled-components";

export const MainContainer = styled.div<{
  justify: string;
  align: string;
  fDirection?: string;
  bg?: boolean;
  urlImage?: string;
  height?: string;
  pt?: string;
}>`
  display: flex;
  width: 100%;
  min-height: 180px;
  flex-direction: ${(props) => props.fDirection || "row"};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding-top: ${(props) => props.pt || "0"};

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  /* @media (max-width: 500px) {
   justify-content: flex-start;
   background-color: pink;
  } */

  ${(props) =>
    props.bg &&
    `
  position: relative;
  background: url(${props.urlImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
    height: ${props.height};
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background:rgb(16, 20, 31, 0.8);
        border-radius: 15px;
        z-index: 0;
    }
    @media (max-width: 800px) {
      flex-direction: row;
      }
      @media (max-width: 500px) {
        flex-direction: column;
        height: max-content;
        padding: 2rem 0px;
        width: 100%;
      }
  `}
`;
