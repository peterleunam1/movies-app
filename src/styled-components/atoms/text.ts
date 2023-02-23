import styled from "styled-components";
export const Text = styled.p<{margin?:string, maxWidth?:string}>`
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxWidth || "100%"};
`;
