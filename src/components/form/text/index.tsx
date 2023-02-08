import React from 'react';

import {
    Container, TitleStyle,
} from './styles';

type Props = {
    title: string;
    fontSize: 'lg' | 'slg' | 'md' | 'sm';
    color?: string;
}

export function Text({ title, fontSize, color }: Props) {
    return (
        <Container>
            <TitleStyle fontSize={fontSize} color={color}>
                {title}
            </TitleStyle>
        </Container>
    )
}