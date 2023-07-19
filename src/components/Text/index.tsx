import { ReactNode } from 'react'
import * as S from './styles'

export interface TextProps {
  children: ReactNode
  weight?: 'bold' | 'regular' | 'semi'
  size?: 'text-sm' | 'text-base' | 'text-lg' | 'text-2xl'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong'
}

export function Text({
  children,
  as = 'h2',
  size = 'text-base',
  weight = 'regular',
}: TextProps) {
  return (
    <S.Container as={as} size={size} weight={weight}>
      {children}
    </S.Container>
  )
}
