import styled from "styled-components";

export const Wrapper = styled.div<{
  w?: string;
  ml?: string;
  mr?: string;
  bradius?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  position: relative;
  width: ${(props) => props.w || "300px"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  border-radius: ${(props) => props.bradius || "0"};

  h1 {
    margin: 0;
  }
  ${(props) =>
    props.w === "80%" &&
    `@media (max-width: 800px) {
        width: 100%;
        margin: 0;
      }
    `}

  ${(props) =>
    props.w === "20%" &&
    `@media (max-width: 800px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 2rem;
      }

      @media (max-width: 500px) {
        flex-direction: column;
        width: 100%;
       align-items: center;
       text-align: center;
      }
    `}
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    ${(props) =>
      props.w === "60%" &&
      `width: 92%;
    margin: 0;`}
  }
`;
