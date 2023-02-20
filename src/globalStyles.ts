import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --primary: #161d2f;
    --secondary: gold;
    --accent: #9d9d9d;
    --body: #10141f;
    --text: #fff;
  }
      body {
        font-family: 'Quicksand', sans-serif;
      background-color: var(--body);
       color: var(--text);
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--text);
  }
  *{
    margin: 0;
    padding: 0;
  }
  h2{
    font-size: 1.9rem;
    margin-bottom: 1.8rem;
  }
`;
export default GlobalStyles;
