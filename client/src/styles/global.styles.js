import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
@import url('https://fonts.googleapis.com/css?family=Anton');

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'Lato', 'Helvetica Neue', sans-serif;
    background-color: #F4F4F7;
    //padding: 20px 40px;

    @media screen and (max-width:800px){
        //some css
        padding: 10px;
    }
  }
  
  h1 {
    font-family: 'Anton', sans-serif;
  }
  
  a.link-unstyled {
    color: inherit;
  }
  
  a.link-unstyled:hover {
    color: inherit;
    text-decoration: none;
  }
  


`;

export default GlobalStyle;
