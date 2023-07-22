import { _FilterKind } from './../../graphql/generated'
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
    width: 100%;
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
          left: 60%;
          top: 26%;
        }
        &:nth-child(2) {
          top: -17%;
          right: 0%;
        }
        &:last-child {
          right: 0%;
          bottom: 0%;
        }
      }
    }
  }

  ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    & > div.left {
      max-width: 100%;
      & > span:first-of-type {
        justify-content: center;
      }
      & > p {
        max-width: 100%;
      }
      & > div:last-of-type {
        justify-content: center;
        flex-direction: column;
      }
      & > img:last-of-type {
        display: none;
      }
    }
    & > div.right {
      width: 100%;
      position: initial;
      & > div {
        width: 100%;
        min-height: 50rem;
        & > img:first-of-type {
          left: 50%;
          transform: translateX(-50%);
        }
        img:nth-child(2) {
          display: none;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .left {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: 37.8rem;
    & > p {
      color: #fff;
    }
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
        strong {
          color: #fff !important;
        }
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
        strong,
        span {
          color: #fff;
        }
      }
    }
    & > div.line {
      height: 2px;
      width: 100%;
      max-width: 3.8rem;
      background-color: #97a5ff;
    }
    & > span {
      color: #fff;
    }
  }
  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    justify-content: center;
    & > .left {
      justify-content: center;
      align-items: center;
      & > p {
        text-align: center;
      }
    }
    & > .right {
      margin-top: 5.6rem;
      align-items: center;
      & > .top {
        flex-direction: column;
        & > div {
          align-items: center;
        }
      }
    }
  }
`

export const About = styled.div`
  padding: 12rem 0rem;
`

export const AboutContent = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
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
  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > div.left {
      max-width: 100%;
      align-items: center;

      & > img:last-of-type {
        align-self: center;
      }
    }
    & > img:last-of-type {
      display: none;
    }
  }
`

export const Brands = styled.div`
  background-color: ${({ theme }) => theme.colors['zinc-100']};
  padding: 4.6rem 0rem;
`

export const BrandsContent = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: auto;
    height: auto;
  }
  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    gap: 5.4rem;
    justify-content: center;
  }
`
export const Steps = styled.div`
  padding: 12rem 0rem;
`

export const StepsContent = styled(MainContainer)`
  & > span:first-of-type {
    color: ${({ theme }) => theme.colors['blue-500']};
  }
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 13.6rem;
    margin-top: 1.6rem;
    & > .left {
      & > h2 {
        font-size: 4.8rem;
        line-height: 6rem;
      }
      & > div {
        margin-top: 8.2rem;
        display: flex;
        align-items: end;
        justify-content: end;
        gap: 3rem;
      }
    }
    & > .right {
      width: 100%;
      max-width: 45.5rem;
      display: flex;
      flex-direction: column;
      gap: 6.5rem;
      position: relative;
      & > svg {
        z-index: 9;
        position: absolute;
        left: 30px;
        top: 68px;
        bottom: 0;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        &:last-child {
          margin-left: -0.5rem;
        }
        & > span {
          display: block;
          position: relative;
          background-color: #fff !important;
          z-index: 10;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid #cbd6e2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${({ theme }) => theme.colors['blue-500']};
        }
        & > div {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
      }
    }
  }
  ${({ theme }) => theme.media.lg} {
    & > span:first-of-type {
      text-align: center;
      display: block;
    }
    & > div {
      flex-direction: column;
      align-items: center;
      & > .left {
        & > h2 {
          text-align: center;
        }
        & > div {
          display: none;
        }
      }
    }
  }
`

export const Blog = styled.div`
  padding: 12rem 0rem;
  background-color: ${({ theme }) => theme.colors['zinc-100']};
`

export const BlogContent = styled(MainContainer)`
  & > div.top {
    display: flex;
    justify-content: space-between;
    & > div:first-of-type {
      width: 100%;
      max-width: 41.1rem;
      & > span:first-of-type {
        color: ${({ theme }) => theme.colors['blue-500']};
      }
      & > h2 {
        font-size: 4.8rem;
        line-height: 6rem;
        margin-top: 1.2rem;
      }
    }
    & > a {
      align-self: flex-end;
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors['gray-700']};
    }
    & > div:last-of-type {
      align-self: flex-end;
      display: flex;
      align-items: center;
      gap: 3.3rem;
      img {
        cursor: pointer;
      }
    }
  }
  & > div.posts {
    margin-top: 4rem;
    & > div {
      padding-bottom: 7.8rem;
      .swiper-pagination-bullet {
        background-color: ${({ theme }) => theme.colors['blue-500']};
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.colors['blue-500']};
      }
    }
  }
  & > a {
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors['gray-700']};
  }
  ${({ theme }) => theme.media.lg} {
    & > div.top {
      & > div:first-of-type {
        text-align: center;
        max-width: 100%;
      }
      & > a,
      & > div:last-of-type {
        display: none;
      }
    }
    & > a {
      display: flex;
      margin-top: 4rem;
    }
  }
`

export const Question = styled.div`
  padding: 12rem 0rem;
`

export const QuestionContent = styled(MainContainer)`
  & > .top {
    display: flex;
    justify-content: space-between;
    & > .left {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 100%;
      max-width: 41.1rem;
      & > span:first-of-type {
        color: ${({ theme }) => theme.colors['blue-500']};
      }
      & > h2 {
        font-size: 4.8rem;
        line-height: 6rem;
        margin-top: 1.6rem;
      }
      & > p {
        margin-top: 1.6rem;
      }
      & > a:first-of-type {
        margin-top: 4rem;
      }
      & > span:last-of-type {
        margin-top: 2.6rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }
    }
    & > .right {
      width: 100%;
      max-width: 69.6rem;
      & > .accordion {
        .accordion-trigger {
          display: flex;
          align-items: center;
          gap: 2.4rem;
          height: 11.2rem;
          cursor: pointer;
          & > span:first-of-type {
            color: ${({ theme }) => theme.colors['blue-500']};
          }
          svg {
            margin-left: auto;
          }
          &[data-state='closed'] {
            border-bottom: 2px solid #cbd6e2;
          }
          &[data-state='open'] {
            svg {
              path:first-child {
                display: none;
              }
            }
          }
        }
        .accordion-content {
          padding-bottom: 3.6rem;
          border-bottom: 2px solid #cbd6e2;
          transition: all 0.2s;
        }
      }
    }
  }
  & > .bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: 7.2rem;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors['zinc-100']};
      padding: 6rem 0rem;
      & > strong:first-of-type {
        margin: 2.4rem 0rem 0.4rem 0rem;
      }
    }
  }
  ${({ theme }) => theme.media.lg} {
    & > .top {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;
      & > .left {
        text-align: center;
        max-width: 100%;
        align-items: center;
        justify-content: center;
      }
      & > .right {
        max-width: 100%;
      }
    }
    & > .bottom {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`

export const Newsletter = styled.div`
  background: url('/img/bg_news.png') no-repeat center center;
  background-size: cover;
  padding: 9rem 0rem;
`

export const NewsletterContent = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
  & > span:first-of-type {
    color: ${({ theme }) => theme.colors['blue-500']};
  }
  h2 {
    color: #fff;
  }
  p {
    margin-top: 0.8rem;
    color: #fff;
  }
  & > form {
    display: flex;
    width: 100%;
    max-width: 48.8rem;
    position: relative;
    height: auto;
    margin-top: 3.5rem;
    input {
      height: 7.2rem;
      width: 100%;
      padding-left: 5.2rem;
      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 2.4rem;
      }
    }

    img {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    button {
      position: absolute;
      cursor: pointer;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  ${({ theme }) => theme.media.lg} {
    & > form {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      img {
        top: 3.6rem;
      }
      button {
        position: initial;
        display: block;
        transform: initial;
      }
    }
  }
`
