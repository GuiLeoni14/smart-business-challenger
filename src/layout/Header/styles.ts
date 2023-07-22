import styled from 'styled-components'
import { MainContainer } from '../../styles/container'

export const Container = styled.div`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.colors['zinc-100']};
`

export const Content = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    a:first-child {
      cursor: pointer;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      color: ${({ theme }) => theme.colors['gray-500']};
    }
    a:last-child {
      height: 4.1rem;
      padding: 0rem 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 1px solid ${({ theme }) => theme.colors['blue-500']};
      color: ${({ theme }) => theme.colors['blue-500']};

      span {
        text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
  ${({ theme }) => theme.media.lg} {
    & > div {
      a:last-child {
        display: none;
      }
    }
  }
`
