import styled from "styled-components";

export const FilterStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  }
  label {
    display: flex;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding-left: 5px;

    input {
      margin-right: 12px;
      cursor: pointer;
    }
    p {
      margin-left: 5px;
      &:hover {
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
`;
