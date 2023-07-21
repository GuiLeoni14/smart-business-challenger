import Image from 'next/image'
import * as S from './styles'
import { Text } from '../../components/Text'
import Link from 'next/link'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Image src="/logo.svg" width={176} height={38} alt="logo" />
        <div>
          <Link href="/dashboard">
            <Image
              src="/img/icons/icon_user.svg"
              width={20}
              height={20}
              alt="User icon"
            />
            <Text size="text-sm" weight="semi">
              <span>Acessar</span>
            </Text>
          </Link>
          <Link href="/login">
            <Text size="text-sm" weight="semi">
              <span>Cadastre-se gratuitamente</span>
            </Text>
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333313 5.5H11M11 5.5L6.99998 1.5M11 5.5L6.99998 9.5"
                stroke="#1D63FF"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </S.Content>
    </S.Container>
  )
}
