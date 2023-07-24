import { Header } from '../../layout/Header'
import * as S from './styles'
import { Hero } from './Hero'
import { Results } from './Results'
import { About } from './About'
import { Brands } from './Brands'
import { Steps } from './Steps'
import { Blog } from './Blog'
import { Question } from './Question'
import { Newsletter } from './Newsletter'
import { Footer } from '../../layout/Footer'
import Head from 'next/head'

export function Home() {
  return (
    <>
      <Head>
        <title>Smart Business</title>
        <meta
          name="description"
          content="O segredo para um negócio de sucesso!"
        />
      </Head>
      <Header />
      <S.Container>
        <Hero />
        <Results />
        <About />
        <Brands />
        <Steps />
        <Blog />
        <Question />
        <Newsletter />
      </S.Container>
      <Footer />
    </>
  )
}
