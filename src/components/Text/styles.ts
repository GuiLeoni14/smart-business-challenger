import styled, { css } from 'styled-components'
import { TextProps } from '.'
import { Slot } from '@radix-ui/react-slot'

const sizes = {
  'text-sm': () => css`
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors['gray-400']};
  `,
  'text-base': () => css`
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors['gray-700']};
  `,
  'text-lg': () => css`
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: ${({ theme }) => theme.colors['gray-300']};
  `,
  'text-xl': () => css`
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors['gray-400']};
  `,
  'text-2xl': () => css`
    font-size: 2.4rem;
    line-height: 3rem;
  `,
  'text-3xl': () => css`
    font-size: 3.2rem;
    line-height: 4rem;
  `,
  'text-4xl': () => css`
    font-size: 4rem;
    line-height: 5rem;
  `,
  'text-5xl': () => css`
    font-size: 5.6rem;
    line-height: 7rem;
  `,
  'text-6xl': () => css`
    font-size: 7.2rem;
    line-height: 9rem;
  `,
  'text-7xl': () => css`
    font-size: 8.8rem;
    line-height: 11rem;
    color: ${({ theme }) => theme.colors['gray-700']};
  `,
  'text-8xl': () => css`
    font-size: 9.6;
    line-height: 12rem;
  `,
}

const weights = {
  bold: () => css`
    font-weight: 700;
  `,
  semi: () => css`
    font-weight: 600;
  `,
  regular: () => css`
    font-weight: 400;
  `,
}
export const Container = styled(Slot)<TextProps>`
  ${({ size, weight }) => css`
    font-style: normal;
    ${sizes[size]}
    ${weights[weight]}
  `}
`
