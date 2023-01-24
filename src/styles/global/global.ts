import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {      
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        border: 0;
        text-transform: none;
    }

    [disabled] {
        cursor: not-allowed;
    }
`;