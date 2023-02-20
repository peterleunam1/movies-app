import styled from "styled-components";

export const ReviewStyles = styled.article`
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--primary);
  padding: 0.8rem 1rem;
  margin-bottom: 1.25rem;
  span {
    background-color: #242b3a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 0.5rem;
    margin-left: 1rem;
    padding: 1rem;

    cite {
      font-weight: 500;
      margin-top: 1rem;
    }
  }
`;
