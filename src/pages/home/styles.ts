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
  div.left {
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

  div.right {
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

export const Results = styled.div`
  padding: 7.6rem 0rem;
  background-color: ${({ theme }) => theme.colors['blue-500']};
  position: relative;
  overflow: hidden;
  & > img {
    position: absolute;
    &:first-of-type {
      top: -10px;
      left: 0;
    }
    &:last-of-type {
      bottom: -20px;
      right: 0;
    }
  }
`

export const ResultsContent = styled(MainContainer)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .left {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: 37.8rem;
    & > div:last-child {
      display: flex;
      align-items: center;
      gap: 2rem;
      .icon {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors['yellow-500']};
      }
      .text {
        display: flex;
        flex-direction: column;
      }
    }
  }
  & > .right {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    & > div.top {
      display: flex;
      align-items: center;
      gap: 5.6rem;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
    }
    & > div.line {
      height: 2px;
      width: 100%;
      max-width: 3.8rem;
      background-color: #97a5ff;
    }
  }
`

export const About = styled.div`
  padding: 12rem 0rem;
`

export const AboutContent = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;
  & > div.left {
    width: 100%;
    max-width: 42rem;
    display: flex;
    flex-direction: column;
    & > span:first-of-type {
      color: ${({ theme }) => theme.colors['blue-500']};
    }
    & > h2 {
      font-size: 4.8rem;
      line-height: 6rem;
      margin-top: 1.6rem;
    }
    & > div {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      & > span {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
    }
    & > img:last-of-type {
      align-self: flex-end;
    }
  }
  & > div.right {
    width: 100%;
    max-width: 66.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    & > img {
      width: auto;
      height: auto;
    }
  }
  & > img:last-of-type {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
