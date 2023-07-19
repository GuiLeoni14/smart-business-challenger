import Image from 'next/image'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Image src="/logo.svg" width={176} height={38} alt="logo" />
        <div></div>
      </S.Content>
    </S.Container>
  )
}
