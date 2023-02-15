import { At, BookBookmark, PhoneCall, WhatsappLogo } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../components/form/text';
import { Title } from '../components/form/title/styles';
import { Container, IconAndTitle } from '../styles/styles/contact';



export default function Contact() {
    const theme = useTheme();

    const contact = [
        {
            title: 'Email:',
            icon: <At size={24} color={theme.blue_100} weight='duotone' />,
            text: "gabriel.vscode@gmail.com"
        },
        {
            title: "Celular para ligações:",
            icon: <PhoneCall size={24} color={theme.blue_100} weight='duotone' />,
            text: "(11) 98623-7504"
        },
        {
            title: "celular para Whatsapp:",
            icon: <WhatsappLogo size={24} color={theme.green} weight='duotone' />,
            text: "(11) 93435-4029"
        }
    ];


    return (
        <Container>
            <Title title='Contato' fontSize='lg' tag='h2' color={theme.blue_100} />

            {
                contact.map((contact) => {
                    return (
                        <div key={contact.text}>
                            <Text title={contact.title} fontSize='md' />
                            <IconAndTitle>
                                {contact.icon}
                                <Text title={contact.text} fontSize='md' />
                            </IconAndTitle>
                        </div>
                    )
                })
            }
        </Container>
    )
}