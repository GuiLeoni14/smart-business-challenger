import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../context/ThemeContext'
import GlobalStyle from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import '../../public/css/nprogress.css'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}
