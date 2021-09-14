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
    padding: 20px 40px;

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
  
  .btn {
    padding: 0.375rem 2rem;
  }
  
  .btn.btn-primary {
    color: #fff;
    background-color: #7DCD40;
    border-color: #7DCD40;
  }
  
  .btn.btn-primary:not(:disabled):not(.disabled):hover {
    color: #fff;
    background-color: #7DCD40;
    border-color: #7DCD40;
  }
  
  .btn.btn-primary:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #7DCD40;
    border-color: #7DCD40;
  }
  
  .btn.btn-primary:not(:disabled):not(.disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(125, 205, 64, 0.5);
  }
  
  .btn.btn-danger {
    color: #fff;
    background-color: #CD4040;
    border-color: #CD4040;
  }
  
  .btn.btn-danger:not(:disabled):not(.disabled):hover {
    color: #fff;
    background-color: #CD4040;
    border-color: #CD4040;
  }
  
  .btn.btn-danger:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #CD4040;
    border-color: #CD4040;
  }
  
  .btn.btn-danger:not(:disabled):not(.disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 64, 64, 0.5);
  }

`;

export default GlobalStyle;