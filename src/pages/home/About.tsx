import * as S from './styles'
import Image from 'next/image'
import { Text } from '../../components/Text'

export function About() {
  return (
    <S.About>
      <S.AboutContent>
        <div className="left">
          <Text size="text-base" weight="semi">
            <span data-aos="fade-down">Sobre a empresa</span>
          </Text>
          <Text size="text-5xl" weight="regular">
            <h2 data-aos="fade-right">Criando e inovando desde 1988</h2>
          </Text>
          <div>
            <Text size="text-base" weight="regular">
              <span>
                <Image
                  src="/img/icons/icon_check.svg"
                  width={23}
                  height={23}
                  alt="Icon check"
                />
                Sagittis sed cursus sed malesuada ultrices
              </span>
            </Text>
            <Text size="text-base" weight="regular">
              <span>
                <Image
                  src="/img/icons/icon_check.svg"
                  width={23}
                  height={23}
                  alt="Icon check"
                />
                Lectus ac at massa ac tellus fringilla aenean
              </span>
            </Text>
            <Text size="text-base" weight="regular">
              <span>
                <Image
                  src="/img/icons/icon_check.svg"
                  width={23}
                  height={23}
                  alt="Icon check"
                />
                Cras faucibus tristique volutpat accumsan
              </span>
            </Text>
          </div>
          <Image src="/img/small_image.png" width={164} height={255} alt="" />
        </div>
        <div className="right">
          <Image src="/img/video.png" width={696} height={376} alt="" />
          <Text size="text-lg" weight="regular">
            <p data-aos="fade-left">
              Suscipit pellentesque praesent auctor molestie massa nunc vitae.
              Felis eget est ut gravida in maecenas. Tempus in in in congue
              proin.
            </p>
          </Text>
          <Text size="text-lg" weight="regular">
            <p data-aos="fade-left">
              Sem in feugiat id dui bibendum. Nunc ut mauris congue amet.
              Facilisis amet enim pellentesque eu suspendisse diam sit. Bibendum
              pharetra malesuada aliquam hendrerit consectetur neque.{' '}
              <strong>Gravida rhoncus enim a sodales</strong> feugiat senectus
              aenean felis. Vitae purus, amet semper pulvinar.
            </p>
          </Text>
        </div>
        <Image
          src="/img/icons/icon_hero_arrows.svg"
          width={13}
          height={26}
          alt="Arrows"
        />
      </S.AboutContent>
    </S.About>
  )
}
