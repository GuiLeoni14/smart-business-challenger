import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../context/ThemeContext'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}
