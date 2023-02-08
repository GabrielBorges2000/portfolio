import styled, { css } from 'styled-components';
//import styled from 'styled-components/native';

type Props = {
    top?: number;
    fontSize: 'lg' | 'slg' | 'md' | 'sm';
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleStyle = styled.p<Props>`
    color: ${({color}) => color};   

    strong, b {
        font-weight: 700;
    }

    font-weight: 500;
        ${({ fontSize }) => {
        switch (fontSize) {
            case 'lg':
                return css`
                    font-size: 20px;
                `
            case 'md':
                return css`
                    font-size: 16px;
                `
            case 'sm':
                return css`
                    font-size: 14px;
                `
        }
    }}

    ${({ top }) => top && css` margin-top: ${top}px; `};

`;