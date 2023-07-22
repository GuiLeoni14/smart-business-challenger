import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../context/ThemeContext'
import GlobalStyle from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}
