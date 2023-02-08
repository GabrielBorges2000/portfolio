import styled, { css } from 'styled-components';

import TitleComponent from '.';
//import styled from 'styled-components/native';

export const Title = styled(TitleComponent)`    
    font-weight: ${({ fontWeight }) => fontWeight};

    color: ${({ color }) => color};

    ${({ fontSize }) => {
        switch (fontSize) {
            case 'lg':
                return css`
                    font-size: 44px;
                    @media (max-width: 800px) {
                        font-size: 36px;
                    }
                
                    @media (max-width: 800px) {
                        font-size: 32px;
                    }
                `
            case 'slg':
                return css`
                    font-size: 26px;
                `
            case 'md':
                return css`
                    font-size: 20px;
                `
            case 'sm':
                return css`
                    font-size: 16px;
                `
        }
    }}


`;

