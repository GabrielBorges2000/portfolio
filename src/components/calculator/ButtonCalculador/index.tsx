import React from 'react';
import { ButtonContainer, } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
}

export default function ButtonCalculador({ title, ...rest }: Props) {
    return (
        <ButtonContainer
            {...rest}
        >
            {title}
        </ButtonContainer>
    )
}   