import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.main`
    margin: 0 5%;
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
        width: 100%;
    }

`;

export const SocialIcons = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;

        border-radius: 10px;
        
        color: ${({theme}) => theme.white};
        background-color: ${({ theme }) => theme.gray_300};
    }

    @media(max-width: 740px) {
        width: 100%;
    }
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


