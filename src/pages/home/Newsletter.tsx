import Link from 'next/link'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import * as S from './styles'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'

export function Newsletter() {
  return (
    <S.Newsletter>
      <S.NewsletterContent>
        <Text size="text-base" weight="semi">
          <span>Newsletter</span>
        </Text>
        <Text size="text-4xl" weight="regular">
          <h2>Fique por dentro das novidades</h2>
        </Text>
        <Text size="text-base" weight="regular">
          <p>
            Junte-se a mais de 20.000 clientes que já usam o SB para ficar por
            dentro de tudo que pode fazer sua empresa crescer.
          </p>
        </Text>
        <form>
          <Image
            src="/img/icons/icon_email.svg"
            width={18}
            height={15}
            alt=""
          />
          <input type="text" placeholder="Insira seu melhor e-mail" />
          <Button>
            <button type="submit">Cadastrar</button>
          </Button>
        </form>
      </S.NewsletterContent>
    </S.Newsletter>
  )
}
