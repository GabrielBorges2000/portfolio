import Image from 'next/image';
import React from 'react';
import { useTheme } from 'styled-components';
import { Title } from '../components/form/title/styles';

import img from '../assets/logo.png'
import Link from 'next/link';
import { Text } from '../components/form/text';

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
    },
]

export default function Project() {
    const theme = useTheme();
    return (
        <>
            <Title
                tag='h3'
                fontSize='slg'
                fontWeight={700}
                color={theme.blue_100}
                title='Bem vindo aos Projetos!'
            />
            <Title
                tag='h6'
                fontSize='md'
                fontWeight={700}
                color={theme.blue_600}
                title='Aqui você irá ver projetos desenvolvidos dentro do mesmo projeto do Portfólio e projetos que hospedei em servidores, mas não se assuste você terá uma ótima expêriencia de usuário!'
            />


            {project.map((project) => (
                <Link href={project.page} key={project.page}>
                    <Image src={project.img} alt={project.name} />
                    <Text title={project.name} fontSize='lg' color={theme.gray_300}/>
                </Link>                    
            ))}
        </>
    )
}