import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    place-items: center;

    padding-top: 30px;
`;

export const InputContainer = styled.div`
    width: 90%;
    max-width: 600px;
    height: 40px;

    display: flex;
    justify-content: end;

    border: 1px solid ${({ theme }) => theme.gray_100};
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;


export const Input = styled.input`
    width: 90%;
    
    background-color: transparent;
    border: none;

    padding: 0 10px;

`;

export const Button = styled.button`
    height: 100%;
    background-color: ${({theme}) => theme.blue_100};
    color: ${({theme}) => theme.white};
    border-radius: 10px;
    padding: 0 10px;
`;

export const Item = styled.div`
    width: 90%;
    max-width: 600px;

    background-color: ${({theme}) => theme.blue_100};
    color: ${({theme}) => theme.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
    padding: 10px 20px;

    border-radius: 10px;
`;



