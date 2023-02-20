import styled from "styled-components";

export const RateContainer = styled.div<{ top: string; right: string }>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  span {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
