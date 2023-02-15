import styled from "styled-components";

export const Container = styled.div`
    margin: 100px 200px;

    @media screen and (max-width: 600px) {
        margin: 100px 40px;
    }

    p {
        margin-bottom: 10px;
    }

    h1, h2, h3, p {
        display: flex;
        justify-content: center;

        margin-bottom: 10px;
    }    
`;

export const CertificateContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;

    margin-bottom: 10px;

    img {
        width: 80%;
        height: 80%;        
    }   

    @media(max-width: 1000px) {
        img{
            width: 110%;
            height: auto;
        }
    }

`;
