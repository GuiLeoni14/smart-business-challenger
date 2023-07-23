import styled from 'styled-components'
import { MainContainer } from '../../styles/container'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['zinc-100']};
`
export const Tarja = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  display: none;
  align-items: center;
  justify-content: center;
  height: 7.4rem;
  a {
    text-align: center;
    display: block;
    color: #fff;
    span {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

export const Content = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.6rem;
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
  & > img:last-of-type {
    display: none;
  }
  ${({ theme }) => theme.media.lg} {
    background: #fff;
    & > img:first-of-type {
      display: none;
    }
    & > img:last-of-type {
      display: block;
    }
    & > div {
      a:last-child {
        display: none;
      }
    }
  }
`
