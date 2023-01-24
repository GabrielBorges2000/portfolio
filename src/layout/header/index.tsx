import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { ArrowFatLinesRight, List } from 'phosphor-react';

import {
    Arrow,
    Button,
    Container,
    Nav,
    NavHidden,
    Overlay,
    Page,
} from './styles';
import Link from 'next/link';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <Container>
            <Image src={logo} width={50} height={50} alt='Símbolo de uma teg fagmente que representa um código.' />
            
            <Nav>
                <Arrow onClick={handleSidebar}>
                    <ArrowFatLinesRight size={32} />
                </Arrow>
                <Link href={'/'}>
                    <Page>Home</Page>
                </Link>
                <Link href={'aboult'}>
                    <Page>Sobre mim</Page>
                </Link>
                <Link href={'aboult'}>
                    <Page>Projetos</Page>
                </Link>
                <Link href={'contact'}>
                    <Page>Contato</Page>
                </Link>
                <Link href={'certificate'}>
                    <Page>Certificação</Page>
                </Link >
            </Nav>
            {sidebar &&
                <NavHidden>
                    <Arrow onClick={handleSidebar}>
                        <ArrowFatLinesRight size={32} />
                    </Arrow>
                    <Link href={'/'}>
                        <Page>Home</Page>
                    </Link>
                    <Link href={'aboult'}>
                        <Page>Sobre mim</Page>
                    </Link>
                    <Link href={'aboult'}>
                        <Page>Projetos</Page>
                    </Link>
                    <Link href={'contact'}>
                        <Page>Contato</Page>
                    </Link>
                    <Link href={'certificate'}>
                        <Page>Certificação</Page>
                    </Link >
                </NavHidden>
            }

            <Button onClick={handleSidebar} >
                <List size={32} />
            </Button>

            {sidebar && <Overlay onClick={handleSidebar} />}
        </Container>
    )
}