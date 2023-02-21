import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { AddressBook, ArrowFatLinesRight, BookBookmark, HouseLine, List, ProjectorScreenChart, UserCircle, X } from 'phosphor-react';
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
        page: 'Home',
        icon: <HouseLine size={24} weight='duotone' />
    },
    {
        href: 'aboult',
        page: 'Sobre mim',
        icon: <UserCircle size={24} weight='duotone' />
    },
    {
        href: 'project',
        page: 'Projetos',
        icon: <ProjectorScreenChart size={24} weight='duotone' />
    },
    {
        href: 'contact',
        page: 'Contatos',
        icon: <AddressBook size={24} weight='duotone' />
    },
    {
        href: 'certificate',
        page: 'Certificados',
        icon: <BookBookmark size={24} weight='duotone' />
    }
];

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
            <Link href={'/'}>
                <Image src={logo} width={50} height={50} alt='Símbolo de uma teg fagmente que representa um código.' />
            </Link>

            <Nav>
                {nav.map((nav) => (
                    <Link href={nav.href} key={nav.page}>
                        <Page >{nav.page}</Page>
                    </Link>
                ))}
            </Nav>
            {sidebar &&
                <NavHidden>
                    {nav.map((nav) => (
                        <Link href={nav.href} key={nav.page} onClick={handleSidebar}>
                            <div key={nav.page}>

                                <Page>{nav.icon}{nav.page}</Page>
                            </div>
                        </Link>
                    ))}
                    <Page onClick={handleSidebar} >
                        <X size={24} weight='bold' />
                        Fechar
                    </Page>
                </NavHidden>
            }

            <Button onClick={handleSidebar} >
                <List size={32} />
            </Button>

            {sidebar && <Overlay onClick={handleSidebar} />}
        </Container>
    )
}