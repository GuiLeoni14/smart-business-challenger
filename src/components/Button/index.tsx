import { ReactElement } from 'react'
import * as S from './styles'

export interface ButtonProps {
  children: ReactElement
  variant?: 'primary'
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <S.Container variant={variant}>{children}</S.Container>
}
