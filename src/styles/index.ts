import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  white: '#fff',
  gray: '#E7E7E7',
  darkGray: '#a2a2a2',
  red: '#FF0000',
  blue: '#0000FF'
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body {
      background-color: ${colors.gray};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 100px auto 200px;
  }
  `

export default GlobalStyle
