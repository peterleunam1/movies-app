import styled from "styled-components";

export const Genre = styled.ul<{ mb?: string }>`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    justify-content: center;
  }
  li {
    margin: 0px 0px ${({ mb }) => mb || "15px "} 10px;
    &:first-child {
      ${({ mb }) => (mb === "15px" ? "margin-top: 15px;" : null)}
    }
  }
`;
