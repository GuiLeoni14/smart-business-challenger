import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Archivo', sans-serif;
    }
    html{
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    img {
      max-width: 100%;
  }
`
