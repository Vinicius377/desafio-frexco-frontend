import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0,
        box-sizing:border-box;
        font-family:"Itim" ,arial;
        color:white;
    }
    body{
        background-color:#061118;
        min-height:100vh;
    }
`;

export default GlobalStyle;
