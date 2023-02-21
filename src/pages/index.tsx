import Head from 'next/head';
import { useTheme } from 'styled-components';
import { Title } from '../components/form/title/styles';
import LottieIconDeveloper from '../icon/developer';
import { Container, TitleInitial } from '../styles/styles/home';

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>

        <TitleInitial>
          <div>
            <Title title='Olá me chamo Gabriel!' fontSize='slg' tag='h1' color={theme.gray_300} />
            <>
              <Title title='Sou programador' fontSize='slg' tag='h1' color={theme.gray_300} />
              <Title title='Front-End!' fontSize='lg' tag='h1' color={theme.blue_100} />
            </>
            
          </div>
          <LottieIconDeveloper />
        </TitleInitial>


      </Container>
    </>
  )
}
