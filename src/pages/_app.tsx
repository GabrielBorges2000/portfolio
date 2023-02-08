import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Footer from '../layout/footer'
import Header from '../layout/header'
import { GlobalStyle, Main } from '../styles/global/global'
import { theme } from '../styles/global/theme'

export type HeaderProps = {
  header?: boolean;
}

export default function App({ Component, pageProps }: AppProps, { header }: HeaderProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  )

}
