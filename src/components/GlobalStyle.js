import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1200px){
        font-size: 75%;
    }

}

body {
    font-family: 'Inter', sans-serif;
    background: #1b1b1b;
    overflow-x: hidden;
}

button {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #726d67;
    background: transparent;
    color: white;
    transition: all 0.3s ease;
    &:hover{
        background-color: #726d67;
        color: white;

    }
}
h2 {
    font-weight: lighter;
    font-size: 2rem;
}

h3 {
    color: white;
}
h4 {
    font-weight: bold;
    font-size: 2rem;
}
span{
    font-weight: bold;
    color: #94c4a4;
}
// contact fix
#smile{
    font-family: 'Pacifico', cursive;
    color: #94c4a4;
}
// contact fix
#waitandse{
    font-family: 'Inter', sans-serif;
    font-weight:lighter;
}
// faq fix
#pushDown{
margin-bottom: 1.5rem;
}

a {
font-size: 1.1.rem;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
}
` 
export default GlobalStyled;

/*
font-family: 'Inter', sans-serif;
font-family: 'Lobster', cursive;
 */
