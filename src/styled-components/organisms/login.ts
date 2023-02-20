import styled from "styled-components";

export const MainLog = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 500px) {    
    height: 100vh;
    width: 100%;
    justify-content: center;
  }

  article {
    width: 50%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 500px) {
      width: 90%;
      align-items: center;
      justify-content: flex-end;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
   

      h1 {
        margin-left: 0.5rem;
      }
    }
    p {
      max-width: 85%;
      margin-top: 1rem;
      @media (max-width: 500px) {
        text-align: center;
      }
    }
    button {
      background-color: #586b91;
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 8px 20px;
      border: none;
      cursor: pointer;
      color: #fff;
      gap: 8px;
      transition: background 0.3s ease, font-weight 0.3s ease;
      margin-top: 2rem;
      &:hover {
        background-color: rgba(58, 73, 104, 0.87);
        font-weight: bold;
      }
    }
  }
`;

export const ContainerLogin = styled.section`
  width: 40%;
  height: 80vh;
  background: url("https://images.pexels.com/photos/8263314/pexels-photo-8263314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  position: relative;

  @media (max-width: 500px) {
    width:100%;
    height: 100vh;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: -1;
    border-radius: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(16, 20, 31, 0.3);
    border-radius: 15px;
    z-index: 0;
    @media (max-width: 500px) {
      background: rgb(16, 20, 31, 0.7);

    }
  }
`;