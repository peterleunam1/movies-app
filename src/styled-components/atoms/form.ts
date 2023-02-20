import styled from "styled-components";

export const FormStyled = styled.form<{ focus: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;

  input {
    width: 100%;
    padding: 0.625rem;
    border: none;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    color: var(--text);
    &:focus {
      ${(props) =>
        props.focus &&
        `
        border-bottom: 1px solid #586b91;
        transition: 0.5s ease border-bottom;
      `}
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;
