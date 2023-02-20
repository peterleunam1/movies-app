import styled from "styled-components";

export const WithScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  gap: 35px;
  overflow: auto;
  padding-bottom: 40px;
  cursor: pointer;
  margin-bottom: 40px;
  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #586b91;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const WithFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 76%;
  gap: 35px;
  padding-bottom: 20px;

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 7%;
  }
  @media (max-width: 500px) {
    justify-content: center;
    gap: 30px;
  }
`;
export const Normal = styled.div<{ gap?: string; s?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: ${({ gap }) => gap || "30px"};


`;
