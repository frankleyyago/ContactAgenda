import { createGlobalStyle } from 'styled-components'

import variables from './variables'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body {
      background-color: ${variables.gray};
      overflow: hidden;

      ::-webkit-scrollbar {
        width: 0;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 40px auto 200px;
  }
  `

export default GlobalStyle
