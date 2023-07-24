import Image from 'next/image'
import * as S from './styles'
import { Text } from '../../../components/Text'
import Link from 'next/link'
import { Button } from '../../../components/Button'
import { ToggleAccountModal } from '../../../components/ToggleAccountModal'
import Head from 'next/head'

export default function PageSignIn() {
  return (
    <>
      <Head>
        <title>Realize seu login</title>
        <meta
          name="description"
          content="O segredo para um negócio de sucesso!"
        />
      </Head>
      <S.Container>
        <S.Content>
          <div className="left">
            <div>
              <Image src="/logo_white.svg" width={176} height={38} alt="logo" />
              <Text size="text-3xl" weight="regular">
                <h2>
                  O verdadeiro conceito de <strong>Smart Company</strong>
                </h2>
              </Text>
            </div>
            <Image src="/img/signIn.png" width={459} height={665} alt="logo" />
          </div>
          <div className="right">
            <S.LoginContent>
              <div>
                <Text size="text-sm" weight="semi">
                  <Link href="/">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 7.5H2M2 7.5L8 1.5M2 7.5L8 13.5"
                        stroke="#1D63FF"
                        stroke-width="2"
                      />
                    </svg>
                    Voltar
                  </Link>
                </Text>
                <Text size="text-3xl" weight="regular">
                  <span>Login</span>
                </Text>
                <form>
                  <Text size="text-sm" weight="regular">
                    <label>E-mail</label>
                  </Text>
                  <input placeholder="Digite seu email" />
                  <Text size="text-sm" weight="regular">
                    <label>Senha</label>
                  </Text>
                  <input placeholder="Digite sua senha" />
                  <div>
                    <Text size="text-sm" weight="regular">
                      <label>
                        <input type="checkbox" />
                        Lembrar senha
                      </label>
                    </Text>
                    <ToggleAccountModal>
                      <Text size="text-sm" weight="regular">
                        <span>Esqueceu sua senha?</span>
                      </Text>
                    </ToggleAccountModal>
                  </div>
                  <Button>
                    <button type="submit">Entrar</button>
                  </Button>
                </form>
                <div className="or">Ou</div>
                <button className="google">
                  <Image
                    src="/img/icons/icon_google.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  Entrar com o Google
                </button>
                <Text size="text-sm" weight="regular">
                  <Link href="#">
                    Não tem uma conta? <strong>Inscrever-se</strong>
                  </Link>
                </Text>
              </div>
            </S.LoginContent>
          </div>
        </S.Content>
      </S.Container>
    </>
  )
}
