import styled from 'styled-components'
import { MainContainer } from '../../styles/container'

export const Container = styled.div``

export const Hero = styled.div`
  padding: 9.684rem 0px 12.642rem 0px;
  background-color: ${({ theme }) => theme.colors['zinc-100']};
  overflow: hidden;
`

export const HeroContent = styled(MainContainer)`
  display: flex;
  position: relative;
  div.right {
    width: 100%;
    max-width: 71.4rem;
    h1 {
      margin-top: 1.6rem;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: ${({ theme }) => theme.colors['blue-500']};
        }
      }
    }
    & > span:first-of-type {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }
    & > p {
      margin-top: 1.6rem;
      width: 100%;
      max-width: 54.5rem;
    }
    & > div:last-of-type {
      margin-top: 4rem;

      display: flex;
      align-items: center;
      gap: 5rem;

      span:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
      }
    }
    & > img:last-of-type {
      margin-top: 6.8rem;
    }
  }

  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    & > div {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        position: absolute;
        &:first-child {
          left: 40%;
          top: 26%;
        }
        &:nth-child(2) {
          top: -17%;
        }
        &:last-child {
          right: 0%;
          bottom: 0%;
        }
      }
    }
  }
`
