import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import { ThemeContextProvider } from '../context/ThemeContext'

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
