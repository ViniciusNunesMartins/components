import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100vh;
    width: 100vw;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
  }
`;