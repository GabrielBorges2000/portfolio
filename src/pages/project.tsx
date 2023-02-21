import Image from 'next/image';
import React from 'react';
import { useTheme } from 'styled-components';
import { Title } from '../components/form/title/styles';

import img from '../assets/logo.png'
import Link from 'next/link';
import { Text } from '../components/form/text';
import { Container } from '../styles/styles/project';
import { MathOperations } from 'phosphor-react';

const project = [
    {
        name: 'Calculadora',
        page: 'calculator',
        img: img
    },
    {
        name: 'Creator de Listas',
        page: 'list',
        img: img
    }
]

export default function Project() {
    const theme = useTheme();
    return (
        <Container>
            <Title title='Meus Projetos' fontSize='lg' tag='h2' color={theme.blue_100} />
            <Title
                title='Aqui você irá encontrar projetos internos e externos do meu portfólio!'
                tag='h6' fontSize='md' fontWeight={700} color={theme.blue_600}
            />


            {project.map((project) => {
                return (
                    <Link href={project.page} key={project.page}>
                        <div>
                            <Image src={project.img} alt={project.name} />
                            <Text title={project.name} fontSize='lg' color={theme.gray_300} />
                        </div>
                    </Link>
                )
            })}
        </Container>
    )
}