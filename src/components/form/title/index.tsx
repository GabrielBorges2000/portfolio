
import React from 'react';

type Props = {
    className?: string;
    color?: string;
    title: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontWeight?: 400 | 700;
    fontSize: 'xlg' | 'lg' | 'slg' | 'md' | 'sm';
    opacity?: number;
}

export default function TitleComponent({  className, tag, color, title }: Props) {
    return (
        <>
            {tag === 'h1' && <h1 className={className} color={color}>{title}</h1>}
            {tag === 'h2' && <h2 className={className} color={color}>{title}</h2>}
            {tag === 'h3' && <h3 className={className} color={color}>{title}</h3>}
            {tag === 'h4' && <h4 className={className} color={color}>{title}</h4>}
            {tag === 'h5' && <h5 className={className} color={color}>{title}</h5>}
            {tag === 'h6' && <h6 className={className} color={color}>{title}</h6>}

        </>
    )
}