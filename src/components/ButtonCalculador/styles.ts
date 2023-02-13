import styled from 'styled-components';
//import styled from 'styled-components/native';

export const ButtonContainer = styled.button`
    height: 80px;
    width: 80px;

    border: 2px solid ${({ theme }) => theme.gray_100};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.white};
    background-color: ${({ theme }) => theme.blue_100};

    font-weight: bold;
    font-size: 24px;

    &:hover {
        opacity: 0.6;
    }
    
`;