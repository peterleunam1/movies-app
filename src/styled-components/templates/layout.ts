import styled from "styled-components";

export const ContainerLayout = styled.div`
  width: 92%;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  main {
    width: 90%;
    margin-top: 25px;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;
