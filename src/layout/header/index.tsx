import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { ArrowFatLinesRight, List } from 'phosphor-react';
import Link from 'next/link';

import {
    Arrow,
    Button,
    Container,
    Nav,
    NavHidden,
    Overlay,
    Page,
} from './styles';


const nav = [
    {
        href: '/',
        page: 'Home'
    },
    {
        href: 'aboult',
        page: 'Sobre mim'
    },
    {
        href: 'project',
        page: 'Projetos'
    },
    {
        href: 'contact',
        page: 'Contatos'
    },
    {
        href: 'certificate',
        page: 'Certificados'
    }
];

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar);



    return (
        <Container>
            <Image src={logo} width={50} height={50} alt='Símbolo de uma teg fagmente que representa um código.' />

            <Nav>
                <Arrow onClick={handleSidebar}>
                    <ArrowFatLinesRight size={32} />
                </Arrow>

                {nav.map((nav) => (
                    <Link href={nav.href} key={nav.page}>
                        <Page >{nav.page}</Page>
                    </Link>
                ))}
            </Nav>
            {sidebar &&
                <NavHidden>
                    <Arrow onClick={handleSidebar}>
                        <ArrowFatLinesRight size={32} />
                    </Arrow>
                    {nav.map((nav) => (
                        <Link href={nav.href} key={nav.page}>
                            <Page>{nav.page}</Page>
                        </Link>
                    ))}
                </NavHidden>
            }

            <Button onClick={handleSidebar} >
                <List size={32} />
            </Button>

            {sidebar && <Overlay onClick={handleSidebar} />}
        </Container>
    )
}