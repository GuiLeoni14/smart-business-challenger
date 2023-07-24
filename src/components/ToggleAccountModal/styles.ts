import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled(Dialog.Root)``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2023;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2024;
  display: flex;
  width: 100%;
  max-width: 74.2rem;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 15px 30px -10px rgba(76, 74, 94, 0.1);
  animation: opacity 0.2s ease-in;
  gap: 5.4rem;
  button {
    cursor: pointer;
  }
  & > div {
    padding: 3.2rem 3.2rem 3.2rem 0rem;
    display: flex;
    flex-direction: column;
    button:first-child {
      display: inline-block;
      max-width: fit-content;
      align-self: flex-end;
      background-color: transparent;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 1.8rem;
        cursor: pointer;
      }
      & > input {
        height: 5.6rem;
        padding: 0rem 2rem;
        color: ${({ theme }) => theme.colors['gray-800']};
        font-size: 1.4rem;
        line-height: 2.1rem;
        background: #fff;
        box-shadow: 0px 24px 32px 0px rgba(205, 208, 231, 0.3);

        &::placeholder {
          ${({ theme }) => theme.colors['gray-50']};
        }
      }
      & > button:first-of-type {
        margin-top: 3.2rem;
      }
    }
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.media.lg} {
    & > img:first-child {
      display: none;
    }
    & > div {
      max-width: 100%;
      width: 100%;
      text-align: center;
      padding: 3.2rem;
    }
  }
`
