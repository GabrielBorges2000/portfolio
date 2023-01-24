import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 150px;

    @media (max-width: 768px) {
        margin: 0 30px;
        flex-direction: column;
    }
`;

export const Title = styled.span`
    width: 80%;
    max-width: 570px;
    margin-top: 130px;
    
    font-size: 60px;
    font-weight: bold;
    color: ${({ theme }) => theme.blue_600};  

    p {
       font-size: 60px; 
    }
    
    @media (max-width: 768px) {

        font-size: 40px;
        p {
       font-size: 40px; 
    }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;



