import Link from 'next/link'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import * as S from './styles'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'

interface AccordionItemProps {
  number: string
  title: string
  content: string
}

function AccordionItem({ title, content, number }: AccordionItemProps) {
  return (
    <Accordion.Item value={number}>
      <Accordion.Header>
        <Accordion.Trigger asChild>
          <div className="accordion-trigger">
            <Text size="text-2xl" weight="regular">
              <span>{number}</span>
            </Text>
            <Text size="text-xl" weight="regular">
              <span>{title}</span>
            </Text>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0V16" stroke="#4C4A5E" strokeWidth="2" />
              <path d="M16 8L-4.76837e-07 8" stroke="#4C4A5E" strokeWidth="2" />
            </svg>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content asChild>
        <Text size="text-lg" weight="regular">
          <p className="accordion-content">{content}</p>
        </Text>
      </Accordion.Content>
    </Accordion.Item>
  )
}

export function Question() {
  return (
    <S.Question>
      <S.QuestionContent>
        <div className="top">
          <div className="left">
            <Text size="text-base" weight="semi">
              <span>Tire suas dúvidas</span>
            </Text>
            <Text size="text-4xl" weight="regular">
              <h2>Perguntas mais frequentes</h2>
            </Text>
            <Text size="text-xl" weight="regular">
              <p>
                Separamos algumas perguntas e respostas que podem te ajudar na
                sua decisão
              </p>
            </Text>
            <Button>
              <Link href="/login">Cadastrar meu negócio</Link>
            </Button>
            <Text>
              <span>
                <Image
                  src="/img/icons/icon_phone.svg"
                  width={13}
                  height={20}
                  alt="Icon"
                />
                Fale conosco
              </span>
            </Text>
          </div>
          <div className="right">
            <Accordion.Root type="single" collapsible className="accordion">
              <AccordionItem
                title="Quais recursos ainda posso acessar nas novas Páginas?"
                content=" Suscipit pellentesque praesent auctor molestie massa nunc
              vitae. Felis eget est ut gravida in maecenas. Tempus in in
              in congue proin. Sem in feugiat id dui bibendum. Nunc ut
              mauris congue amet. Facilisis amet enim pellentesque eu
              suspendisse diam sit. Bibendum pharetra malesuada aliquam
              hendrerit consectetur neque. Gravida rhoncus enim a sodales
              feugiat senectus aenean felis. Vitae purus, amet semper
              pulvinar."
                number="01"
              />
              <AccordionItem
                title="Como faço para abrir a minha nova Página?"
                content=" Suscipit pellentesque praesent auctor molestie massa nunc
              vitae. Felis eget est ut gravida in maecenas. Tempus in in
              in congue proin. Sem in feugiat id dui bibendum. Nunc ut
              mauris congue amet. Facilisis amet enim pellentesque eu
              suspendisse diam sit. Bibendum pharetra malesuada aliquam
              hendrerit consectetur neque. Gravida rhoncus enim a sodales
              feugiat senectus aenean felis. Vitae purus, amet semper
              pulvinar."
                number="02"
              />
              <AccordionItem
                title="Há algum conteúdo que não migrará com a minha Página?"
                content=" Suscipit pellentesque praesent auctor molestie massa nunc
              vitae. Felis eget est ut gravida in maecenas. Tempus in in
              in congue proin. Sem in feugiat id dui bibendum. Nunc ut
              mauris congue amet. Facilisis amet enim pellentesque eu
              suspendisse diam sit. Bibendum pharetra malesuada aliquam
              hendrerit consectetur neque. Gravida rhoncus enim a sodales
              feugiat senectus aenean felis. Vitae purus, amet semper
              pulvinar."
                number="03"
              />
              <AccordionItem
                title="Como as pessoas encontrarão a minha nova Página?"
                content=" Suscipit pellentesque praesent auctor molestie massa nunc
              vitae. Felis eget est ut gravida in maecenas. Tempus in in
              in congue proin. Sem in feugiat id dui bibendum. Nunc ut
              mauris congue amet. Facilisis amet enim pellentesque eu
              suspendisse diam sit. Bibendum pharetra malesuada aliquam
              hendrerit consectetur neque. Gravida rhoncus enim a sodales
              feugiat senectus aenean felis. Vitae purus, amet semper
              pulvinar."
                number="04"
              />
              <AccordionItem
                title="O que é o Feed? Como faço para configurá-lo?"
                content=" Suscipit pellentesque praesent auctor molestie massa nunc
              vitae. Felis eget est ut gravida in maecenas. Tempus in in
              in congue proin. Sem in feugiat id dui bibendum. Nunc ut
              mauris congue amet. Facilisis amet enim pellentesque eu
              suspendisse diam sit. Bibendum pharetra malesuada aliquam
              hendrerit consectetur neque. Gravida rhoncus enim a sodales
              feugiat senectus aenean felis. Vitae purus, amet semper
              pulvinar."
                number="05"
              />
            </Accordion.Root>
          </div>
        </div>
        <div className="bottom">
          <div>
            <Image
              src="/img/icons/icon_chat_question.svg"
              width={42}
              height={41}
              alt="Icon"
            />
            <Text size="text-xl" weight="regular">
              <strong>Dúvidas? </strong>
            </Text>
            <Text size="text-sm" weight="regular">
              <strong>Envie uma mensagem para nosso time</strong>
            </Text>
          </div>
          <div>
            <Image
              src="/img/icons/icon_blocks_question.svg"
              width={42}
              height={41}
              alt="Icon"
            />
            <Text size="text-xl" weight="regular">
              <strong>Faça parte</strong>
            </Text>
            <Text size="text-sm" weight="regular">
              <strong>Cadastre-se para transformar sua empresa</strong>
            </Text>
          </div>
          <div>
            <Image
              src="/img/icons/icon_whats_question.svg"
              width={42}
              height={41}
              alt="Icon"
            />
            <Text size="text-xl" weight="regular">
              <strong>Chama no zap</strong>
            </Text>
            <Text size="text-sm" weight="regular">
              <strong>Fale com onosso comercial</strong>
            </Text>
          </div>
        </div>
      </S.QuestionContent>
    </S.Question>
  )
}
