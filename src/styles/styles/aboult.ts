import styled from "styled-components";

export const Container = styled.div`
    margin: 100px 200px;

    @media screen and (max-width: 600px) {
        margin: 100px 40px;
    }

    p {
        margin-bottom: 10px;
    }

    h1, h2, h3 {
        display: flex;
        justify-content: center;

        margin-bottom: 10px;
    }


    
`;

export const IconAndTitle = styled.div`
    display: flex;
    gap: 10px;
`;