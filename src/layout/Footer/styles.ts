import styled from 'styled-components'
import { MainContainer } from '../../styles/container'

export const Container = styled.footer`
  padding: 5.4rem 0rem;
`

export const Content = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  ${({ theme }) => theme.media.lg} {
    text-align: center;
    flex-direction: column;
    max-width: 20rem;
    margin: 0 auto;
  }
`
