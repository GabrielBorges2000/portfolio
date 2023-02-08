import styled from "styled-components";

export const Container = styled.div`
    height: 400px;
    width: 300px;
    background-color: ${({theme}) => theme.blue_50};
 
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 10px;

    .border1 {
        border-bottom-left-radius: 8px;
    }
    .border2 {
        border-bottom-right-radius: 8px;
    }

`;

export const InputCalculator = styled.input`    
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: row;

    background-color: transparent;
    border: 4px solid ${({ theme }) => theme.gray_100};

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    font-size: 16px;
    font-weight: bold;
    padding: 10px;

    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
