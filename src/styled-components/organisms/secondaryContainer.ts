import styled from "styled-components";

export const SecondaryContainer = styled.aside<{ w?: string }>`
  width: 22%;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 5px;

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    padding: 20px 0 0 0;
    text-align: center;
    margin-bottom: 40px;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;
