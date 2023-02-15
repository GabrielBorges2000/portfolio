import { BookBookmark, Brain, Buildings, CurrencyCircleDollar, CurrencyDollar } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../components/form/text';
import { Title } from '../components/form/title/styles';
import { Container, IconAndTitle } from '../styles/styles/aboult';


export default function Aboult() {
    const theme = useTheme();

    const aboult = [
        {   
            id: '1',
            text: "Olá eu me chamo Gabriel, Tenho 22 anos e sou programador Front-End."
        },
        {   
            id: '2',
            text: "Acredito que a Tecnologia é o futuro e eu quero fazer parte dele, atualmente eu estudo por conta própria em plataformas onlines e gratuitas. Tenho habilidade com HTML5, CSS, JavaScript(Básico), ReactJS, React Native, NextJS, TypeScript, Git, GitHub e outros..."
        },
        {   
            id: '3',
            text: "Meus estudos são continuos e diários pois eu acredito que a evolução das minhas habilidades deve ser constante."
        },
        {   
            id: '4',
            text: "Atualmente eu moro sozinho e tenho um objetivo de ter uma estabilidade finaceira e se posivel ter uma vaga no exterior, estudo inglês com muita frequência, inclusive eu consigo escutar, ler, escrever o básico, porém tenho dificuldade em conversação."
        }
    ];

    const metas = [
        {
            id: '1',
            icon: <BookBookmark size={24} color={theme.green} />,
            text: "Faculdade de Engenharia de Software"
        },
        {
            id: '2',
            icon: <Brain size={24} color={theme.green} />,
            text: "Evoluir minhas habilidades"
        },
        {
            id: '3',
            icon: <Buildings size={24} color={theme.green} />,
            text: "Emprego Home Office"
        },
        {
            id: '4',
            icon: <CurrencyCircleDollar size={24} color={theme.green} />,
            text: "Sálario acima de R$2000"
        }
    ]

    return (
        <Container>
            <Title title='Sobre mim' fontSize='lg' tag='h2' color={theme.blue_100} />
            {
                aboult.map((aboult) => <Text title={aboult.text} fontSize='md' key={aboult.id}/>)
            }

            <Title title='Minhas metas para 2023' fontSize='md' tag='h3' color={theme.blue_100} />

            {
                metas.map((metas) => {
                    return (
                        <IconAndTitle key={metas.id}>
                            {metas.icon}
                            <Text title={metas.text} fontSize='sm' />
                        </IconAndTitle>
                    )
                })
            }
        </Container>

    )
}