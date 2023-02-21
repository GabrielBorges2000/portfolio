import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :focus {
        outline: 0;
    }

    body {      
        -webkit-font-smoothing: antialiased;        
    }

    button {
        cursor: pointer;
        border: 0;
        text-transform: none;
    }

    [disabled] {
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
    }
`;

export const Main = styled.main`
    margin: 80px 0;    
`;