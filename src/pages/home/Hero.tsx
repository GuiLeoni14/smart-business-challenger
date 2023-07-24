import Image from 'next/image'
import { Text } from '../../components/Text'
import * as S from './styles'
import { Button } from '../../components/Button'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export function Hero() {
  return (
    <S.Hero>
      <S.HeroContent>
        <div className="left">
          <Text weight="bold">
            <span data-aos="fade-down">
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
            <h1 data-aos="fade-right">
              O segredo para um negócio de{' '}
              <TypeAnimation
                sequence={[
                  'sucesso!',
                  2000,
                  'destaque!',
                  2000,
                  'impacto!',
                  2000,
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
              />
            </h1>
          </Text>
          <Text size="text-xl" weight="regular">
            <p data-aos="fade-right">
              Pellentesque rutrum turpis non est turpis pretium morbi urna. Erat
              dictum blandit aliquam purus sed rhoncus.
            </p>
          </Text>
          <div data-aos="fade-up">
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
        <div className="right">
          <div>
            <Image
              src="/img/icons/icon_chat.svg"
              width={63}
              height={63}
              alt="Icon chat"
            />
            <Image src="/img/men_hero.png" width={649} height={713} alt="Men" />
            <Image src="/img/chart.png" width={221} height={199} alt="Chat" />
          </div>
        </div>
      </S.HeroContent>
    </S.Hero>
  )
}
