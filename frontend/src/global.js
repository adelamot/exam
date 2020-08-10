import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: right;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,  Helvetica, "museo-slab", "Artegra Slab", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 90vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
      img {
        border-radius: 5px;
        height: auto;
        width: 10rem;
      }
      div {
        text-align: center;
      }
    
      a {
        color: ${({ theme }) => theme.primaryHover};
        text-decoration: none;
        text-align: right;
        align-items: right;
      }
    `