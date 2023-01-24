import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Footer from '../layout/footer'
import Header from '../layout/header'
import { GlobalStyle } from '../styles/global/global'
import { theme } from '../styles/global/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )

}
