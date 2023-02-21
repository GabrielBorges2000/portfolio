import Head from 'next/head';
import Link from 'next/link';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Text } from '../components/form/text';
import { Title } from '../components/form/title/styles';
import LottieIconDeveloper from '../icon/developer';
import { Container, HeaderContent, SocialIcons, TitleInitial } from '../styles/styles/home';

const icon = [
  {
    href: 'https://www.linkedin.com/in/gabriel-borges-7bb048250/',
    icon: <LinkedinLogo size={24} weight='bold' />,
    name: 'Linkedin'
  },
  {
    href: 'https://github.com/GabrielBorges2000',
    icon: <GithubLogo size={24} weight='bold' />,
    name: 'GitHub'
  },
]

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>

        <HeaderContent>
          <TitleInitial>
            <div>
              <Title title='Olá me chamo Gabriel!' fontSize='lg' tag='h1' color={theme.gray_300} />
              <>
                <Title title='Sou programador' fontSize='lg' tag='h1' color={theme.gray_300} />
                <Title title='Front-End!' fontSize='xlg' tag='h1' color={theme.blue_100} />
              </>

            </div>
            <LottieIconDeveloper />
          </TitleInitial>

          <SocialIcons>
            {
              icon.map((icon) => {
                return (
                  <Link href={icon.href} key={icon.name}>
                    {icon.icon}
                  </Link>
                )
              })
            }
          </SocialIcons>
        </HeaderContent>


      </Container>
    </>
  )
}
