import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: 528px 1fr;
  min-height: 100vh;
  & > .left {
    background-color: ${({ theme }) => theme.colors['blue-500']};
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding-top: 8rem;
    & > div {
      margin: 0 auto;
      display: flex;
      align-items: start;
      flex-direction: column;
      max-width: 32.8rem;
      gap: 6.4rem;
      h2 {
        color: #fff;
      }
    }
    & > img {
      width: auto;
      height: auto;
      margin-top: auto;
    }
  }
`

export const LoginContent = styled.div`
  width: 100%;
  max-width: calc(122.2rem - 524px);
  padding: 0 2.4rem;
  display: flex;
  justify-content: flex-end;
  padding: 8rem 0rem;
  & > div {
    width: 100%;
    max-width: 47rem;
    & > a:first-child {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    & > span:first-of-type {
      margin-top: 8rem;
      display: block;
    }
    & > form {
      display: flex;
      flex-direction: column;
      & > label:first-of-type {
        margin-top: 3.8rem;
        display: block;
      }
      & > label:nth-of-type(2) {
        margin-top: 2.8rem;
        display: block;
      }
      & > input {
        height: 5.6rem;
        padding: 0rem 2rem;
        color: ${({ theme }) => theme.colors['gray-800']};
        font-size: 1.4rem;
        line-height: 2.1rem;
        border: 1.5px solid rgba(160, 170, 178, 0.4);

        &::placeholder {
          ${({ theme }) => theme.colors['gray-50']};
        }
      }
      & > div:first-of-type {
        margin-top: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > label:first-of-type {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          input {
            border-radius: 3px;
            border: 1.5px solid rgba(160, 170, 178, 0.4);
            width: 2rem;
            height: 2rem;
          }
        }
        & > button {
          background-color: transparent;
          cursor: pointer;
          span {
            color: ${({ theme }) => theme.colors['blue-200']};
          }
        }
      }
      & > button:first-of-type {
        margin-top: 3.2rem;
      }
    }
    & > .or {
      color: #a9abb7;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%; /* 21px */
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 3.5rem;
      &::before,
      &::after {
        position: absolute;
        width: 45%;
        content: '';
        height: 1px;
        background-color: rgba(0, 0, 0, 0.05);
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    & > button:first-of-type {
      margin-top: 3.5rem;
      display: block;
      width: 100%;
      height: 5.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
      color: #5c6277;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%; /* 21px */
    }
    & > a:last-of-type {
      display: block;
      margin-top: 3.5rem;
      strong {
        text-decoration: underline;
      }
    }
  }
`
