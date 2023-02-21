import styled from "styled-components";

export const AcordeonContent = styled.section<{
  overflow: string;
  maxheight: string;
  wChildren?: string;
  mt?: string;
  width?: string;
}>`
  width: ${(props) => props.width || "83%"};
  max-height: ${(props) => props.maxheight};
  border: 1px solid #586b91;
  padding: 10px 2px 4px 2px;
  transition: 0.3s ease max-height, 0.3s ease border;
  overflow: ${(props) => props.overflow};
  border-radius: 10px;
  background-color: var(--primary);
  position: relative;
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: 20px;

  div {
    margin-top: 0.625rem;
    width: ${(props) => props.wChildren || "93%"};
    margin: 0 auto;
    padding: 0.625rem 0px;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const TitleA = styled.h3<{ visibility: string }>`
  width: 90%;
  height: 1.25rem;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 0.6875rem;
  background-color:red;
  span {
    visibility: ${(props) => props.visibility};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
