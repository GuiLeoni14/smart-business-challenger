import Image from 'next/image'
import { Text } from '../../components/Text'
import { Header } from '../../layout/Header'
import * as S from './styles'
import { Button } from '../../components/Button'
import Link from 'next/link'

export function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Hero>
          <S.HeroContent>
            <div className="right">
              <Text weight="bold">
                <span>
                  <Image
                    src="/img/icons/icon_world.svg"
                    width={32}
                    height={32}
                    alt="Icon world"
                  />
                  A receita certa para o seu negócio
                </span>
              </Text>
              <Text size="text-6xl" weight="regular">
                <h1>
                  O segredo para um negócio de <span>sucesso!</span>
                </h1>
              </Text>
              <Text size="text-xl" weight="regular">
                <p>
                  Pellentesque rutrum turpis non est turpis pretium morbi urna.
                  Erat dictum blandit aliquam purus sed rhoncus.
                </p>
              </Text>
              <div>
                <Button>
                  <Link href="/login">Cadastrar meu negócio</Link>
                </Button>
                <Text>
                  <span>
                    <Image
                      src="/img/icons/icon_phone.svg"
                      width={13}
                      height={20}
                      alt="Icon world"
                    />
                    Fale conosco
                  </span>
                </Text>
              </div>
              <Image
                src="/img/icons/icon_hero_arrows.svg"
                width={13}
                height={26}
                alt="Arrows"
              />
            </div>
            <div className="left">
              <div>
                <Image
                  src="/img/icons/icon_chat.svg"
                  width={63}
                  height={63}
                  alt="Icon chat"
                />
                <Image
                  src="/img/men_hero.png"
                  width={649}
                  height={713}
                  alt="Men"
                />
                <Image
                  src="/img/chart.png"
                  width={221}
                  height={199}
                  alt="Chat"
                />
              </div>
            </div>
          </S.HeroContent>
        </S.Hero>
      </S.Container>
    </>
  )
}
