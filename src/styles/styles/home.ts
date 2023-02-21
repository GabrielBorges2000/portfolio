import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.main`
    display: flex;
    flex-direction: column; 
    align-items: center;

    @media (max-width: 768px) {
        margin: 0 30px;
        flex-direction: column;
    }
`;


export const TitleInitial = styled.div`
    max-width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    @media(max-width: 740px) {
        flex-direction: column-reverse;
        max-width: 100%;
    }

    div {
        width: 90%;
    }

`;


