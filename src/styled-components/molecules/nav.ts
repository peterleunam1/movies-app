import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--primary);
  width: 4.5rem;
  height: calc(100vh - (1.875rem * 2 + 40px));
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem 0;
  margin-right: 1.75rem;
  margin-top: 25px;

  @media (max-width: 800px) {
    width: calc(100% - (1.875rem * 2));
    height: 8vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.875rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      @media (max-width: 500px) {
        width: 70%;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;

    @media (max-width: 800px) {
      flex-direction: row;
      margin-top: 0;
    }
  }
  li {
    margin: 10px 0;
    @media (max-width: 800px) {
      margin: 0 10px;
    }
  }
`;
