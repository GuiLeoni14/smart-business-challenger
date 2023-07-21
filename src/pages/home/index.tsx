import { Header } from '../../layout/Header'
import * as S from './styles'
import { Hero } from './Hero'
import Image from 'next/image'
import { Text } from '../../components/Text'
import { Results } from './Results'
import { About } from './About'
import { Brands } from './Brands'
import { Steps } from './Steps'
import { Blog } from './Blog'
import { Question } from './Question'
import { Newsletter } from './Newsletter'

export function Home() {
  return (
    <>
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
    </>
  )
}
