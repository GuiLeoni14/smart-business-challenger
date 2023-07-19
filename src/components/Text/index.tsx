import { ReactElement } from 'react'
import * as S from './styles'

export interface TextProps {
  children: ReactElement
  weight?: 'bold' | 'regular' | 'semi'
  size?: 'text-sm' | 'text-base' | 'text-lg' | 'text-2xl'
}

export function Text({
  children,
  size = 'text-base',
  weight = 'regular',
}: TextProps) {
  return (
    <S.Container size={size} weight={weight}>
      {children}
    </S.Container>
  )
}
