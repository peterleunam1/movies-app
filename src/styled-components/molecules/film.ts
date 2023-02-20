import styled from "styled-components";

export const FilmContainer = styled.figure`
  position: relative;
  cursor: pointer;
  figure {
    width: 180px;
    height: 270px;

    @media (max-width: 500px) {
      width: 120px;
      height: 180px;
    }
  }
  h3 {
    font-size: 15px;
    margin-top: 6px;
    max-width: 11.25rem;
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2px;
    @media (max-width: 500px) {
      margin: 0;
    }
    p {
      font-size: 0.8125rem;
      font-weight: lighter;
    }
    div {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0px 0.75rem;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
      margin-left: 0.3125remx;
    }
  }
`;
