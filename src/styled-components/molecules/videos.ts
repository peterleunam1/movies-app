import styled from "styled-components";

export const ContainerVideos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
