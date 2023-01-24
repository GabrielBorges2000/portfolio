import React from 'react';

import {
    Container, Title,
} from './styles';

type Props = {
    title: string;
    color?: string;
    weight?: string;
    top?: number;
    bottom?: number;
    size?: number;
}

export function Text({ title, top, bottom, color, weight, size }: Props) {
    return (
        <Container>
            <Title
                top={top}
                bottom={bottom}
                color={color}
                weight={weight}
                size={size}
            >
                {title}
            </Title>
        </Container>
    )
}