import { Header } from '../../layout/Header'
import * as S from './styles'
import { Hero } from './Hero'
import Image from 'next/image'
import { Text } from '../../components/Text'

export function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <Hero />
        <S.Results>
          <S.ResultsContent>
            <div className="left">
              <Image
                src="/img/icons/icon_quote.svg"
                width={22}
                height={16}
                alt="Icon Quote"
              />
              <Text size="text-xl" weight="regular">
                <p>
                  Quis sed commodo est aliquam, praesent fames pretium quam.
                  Nisi, massa of tipe tincidunt week.
                </p>
              </Text>
              <div>
                <div className="icon">
                  <Image
                    src="/img/icons/icon_men.png"
                    width={54}
                    height={54}
                    alt="Icon men"
                  />
                </div>
                <div className="text">
                  <Text size="text-lg" weight="semi">
                    <strong>Savannah Nguyen</strong>
                  </Text>
                  <Text size="text-sm" weight="regular">
                    <strong>UX Designer | Google</strong>
                  </Text>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="top">
                <div>
                  <Text size="text-5xl" weight="regular">
                    <strong>120</strong>
                  </Text>
                  <Text size="text-xl" weight="regular">
                    <span>Projeto realizado 2021</span>
                  </Text>
                </div>
                <div>
                  <Text size="text-5xl" weight="regular">
                    <strong>12</strong>
                  </Text>
                  <Text size="text-xl" weight="regular">
                    <span>Escritórios no Brasil</span>
                  </Text>
                </div>
                <div>
                  <Text size="text-5xl" weight="regular">
                    <strong>325m</strong>
                  </Text>
                  <Text size="text-xl" weight="regular">
                    <span>Faturamento 2021</span>
                  </Text>
                </div>
              </div>
              <div className="line"></div>
              <Text size="text-xl" weight="regular">
                <span>Expandindo para todo território nacional</span>
              </Text>
            </div>
          </S.ResultsContent>
          <Image
            src="/img/icons/icon_result_cube_left.svg"
            width={112}
            height={53}
            alt="Icon Cube"
          />
          <Image
            src="/img/icons/icon_result_cube_right.svg"
            width={151}
            height={151}
            alt="Icon Cube"
          />
        </S.Results>
      </S.Container>
    </>
  )
}
