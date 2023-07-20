import { Header } from '../../layout/Header'
import * as S from './styles'
import { Hero } from './Hero'
import Image from 'next/image'
import { Text } from '../../components/Text'
import { Results } from './Results'
import { About } from './About'

export function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <Hero />
        <Results />
        <About />
      </S.Container>
    </>
  )
}
