import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Text } from '../Text'
import Image from 'next/image'
import { Button } from '../Button'

interface ToggleAccountModalProps {
  children: ReactNode
}

export function ToggleAccountModal({ children }: ToggleAccountModalProps) {
  return (
    <S.Container>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <Image
            src="/img/reset_password.png"
            width={222}
            height={460}
            alt=""
          />
          <div>
            <Dialog.Close>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 11L11 21" stroke="#4C4A5E" stroke-width="1.5" />
                <path d="M21 21L11 11" stroke="#4C4A5E" stroke-width="1.5" />
              </svg>
            </Dialog.Close>
            <Text size="text-3xl" weight="semi">
              <span>Esqueceu a senha?</span>
            </Text>
            <Text size="text-base" weight="regular">
              <p>
                Digite seu e-mail e enviaremos instruções para redefinir sua
                senha
              </p>
            </Text>
            <form>
              <Text size="text-sm" weight="semi">
                <label>E-mail</label>
              </Text>
              <input placeholder="Digite seu email" />
              <Button>
                <button type="submit">Entrar</button>
              </Button>
            </form>
          </div>
        </S.Content>
      </Dialog.Portal>
    </S.Container>
  )
}
