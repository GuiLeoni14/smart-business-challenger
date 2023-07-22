import styled from 'styled-components'
import { MainContainer } from '../../styles/container'

export const Container = styled.footer`
  padding: 5.4rem 0rem;
`

export const Content = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`
