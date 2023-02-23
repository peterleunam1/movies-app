import styled from "styled-components";

export const FilmContainer = styled.figure`
  position: relative;
  width: 180px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 270px;
  }

  figcaption {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-top: 2px;
    width: 100%;

    @media (max-width: 500px) {
      margin: 0;
    }
    p {
      font-size: 0.8125rem;
      font-weight: lighter;
    }
  }
  h3 {
    font-size: 15px;
    margin-top: 6px;
    max-width: 11.25rem;
  }
`;
export const FilmImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;

  @media (max-width: 500px) {
    height: 310px;
    object-fit: contain;
  }
`;
export const FigContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      margin-left: 0.3125rem;
    }
  }
  div {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0px 0.75rem;
  }
`;
