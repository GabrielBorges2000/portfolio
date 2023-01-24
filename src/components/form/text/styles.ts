import styled, { css } from 'styled-components';
//import styled from 'styled-components/native';

type Props = {
    color?: string;
    weight?: string;
    top?: number;
    bottom?: number;
    size?: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p<Props>`
    margin-top: 0;
    margin-bottom: 0;
    color: ${({theme}) => theme.gray_200};    
    font-weight: 500;
    font-size: 12px;

    ${({ top }) => top && css` margin-top: ${top}px; `};
    ${({ bottom }) => bottom && css` margin-buttom: ${bottom}px; `};
    ${({ color }) => color && css` color: ${color}; `};
    ${({ weight }) => weight && css` font-weight: ${weight}; `};
    ${({ size }) => size && css` font-size: ${size}px; `};

`;