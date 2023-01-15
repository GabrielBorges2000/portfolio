import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import { GlobalStyle } from '../styles/global/global'
import { theme } from '../styles/global/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}
