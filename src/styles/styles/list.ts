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
    border: 1px solid ${({theme}) => theme.gray_100};
`;


export const Input = styled.input`
    background-color: transparent;
    border: none;

`;

export const Button = styled.button`
    height: 100%;
    background-color: ${({theme}) => theme.blue_100};
    color: ${({theme}) => theme.white};
`;

export const Item = styled.div`

`;



