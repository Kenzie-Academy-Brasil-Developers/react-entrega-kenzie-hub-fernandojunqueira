import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary:#FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        //paleta de cinzas do mais escuro pro mais claro
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        //feedback Pallete
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
    }

    *{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: black;
    }

    h1 , h2 , h3{
        font-weight: 700;
        color: var(--color-grey-0)
    }

    p, span  {
        color: var(--color-grey-1)  
    }

    label{
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-0);

        @media (width < 768px){
            font-size: 10px;
        }
        
    }

`