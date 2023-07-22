import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { Slot } from '@radix-ui/react-slot'

const variants = {
  primary: () => css`
    font-size: 1.4rem;
    line-height: 2.1rem;
  `,
}

export const Container = styled(Slot)<ButtonProps>`
  ${({ variant }) => css`
    ${variants[variant]}
    height: 6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 3.2rem;

    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.7rem;

    color: #fff !important;
    background-color: ${({ theme }) => theme.colors['blue-500']};
  `}
`
