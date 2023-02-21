import styled from "styled-components";

export const Content = styled.div<{ mt?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 30vh;
  p {
    margin-bottom: 30px;
    margin-top: ${({ mt }) => mt || "0"};
  }
`;
