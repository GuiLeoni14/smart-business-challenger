import Image from 'next/image'
import * as S from './styles'
import { Text } from '../../components/Text'

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <Image src="/logo.svg" width={176} height={38} alt="logo" />
        <Text size="text-sm" weight="regular">
          <span>© 2022 SmartBusiness. Todos os direitos reservados</span>
        </Text>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/icons/icon_twt.svg"
              width={32}
              height={32}
              alt="Icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/icons/icon_lin.svg"
              width={32}
              height={32}
              alt="Icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/icons/icon_insta.svg"
              width={32}
              height={32}
              alt="Icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/icons/icon_face.svg"
              width={32}
              height={32}
              alt="Icon"
            />
          </a>
        </div>
        <Text size="text-sm" weight="regular">
          <span>
            Desenvolvido por{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Guilherme Leoni
            </a>
          </span>
        </Text>
      </S.Content>
    </S.Container>
  )
}
