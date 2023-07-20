import { Text } from '../../components/Text'
import * as S from './styles'
import Image from 'next/image'

interface StepProps {
  number: number
  title: string
  subTitle: string
}

function Step({ number, subTitle, title }: StepProps) {
  return (
    <div className="step">
      <Text size="text-xl" weight="regular">
        <span>{number}</span>
      </Text>
      <div>
        <Text size="text-xl" weight="regular">
          <strong>{title}</strong>
        </Text>
        <Text size="text-lg" weight="regular">
          <span>{subTitle}</span>
        </Text>
      </div>
    </div>
  )
}

export function Steps() {
  const steps = [
    {
      title: 'Cadastre-se em nosso site',
      subTitle: 'Ultricies sed leo ac vel lectus nisi vestibulum',
      number: 1,
    },
    {
      title: 'Selecione um produto ',
      subTitle: 'Eros lorem ac viverra donec velit.',
      number: 2,
    },
    {
      title: 'Realize a venda pleo Instagram',
      subTitle: 'Purus potenti ac elementum odio nulla',
      number: 3,
    },
    {
      title: 'Acompanhe seus rendimentos',
      subTitle: 'Ipsum varius egestas pharetra viverra.',
      number: 4,
    },
  ] satisfies StepProps[]
  return (
    <S.Steps>
      <S.StepsContent>
        <Text size="text-base" weight="semi">
          <span>Entenda como funciona</span>
        </Text>
        <div>
          <div className="left">
            <Text size="text-4xl" weight="regular">
              <h2>Veja como aplicamos nossa metodologia</h2>
            </Text>
            <div>
              <Image src="/img/sales.png" width={176} height={195} alt="" />
              <Image src="/img/desktop.png" width={384} height={476} alt="" />
            </div>
          </div>
          <div className="right">
            <svg
              width="2"
              height="448"
              viewBox="0 0 2 448"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0L1.00002 448"
                stroke="#97A5FF"
                stroke-width="2"
                stroke-dasharray="2 6"
              />
            </svg>
            {steps.map((step) => {
              return (
                <Step
                  key={step.title}
                  title={step.title}
                  subTitle={step.subTitle}
                  number={step.number}
                />
              )
            })}
            <div className="step">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="37" cy="37" r="32" fill="#1D63FF" />
                <circle
                  cx="37"
                  cy="37"
                  r="34.5"
                  stroke="#2E7AFF"
                  stroke-opacity="0.2"
                  stroke-width="5"
                />
                <path
                  d="M36.1093 24.7454C36.4804 24.0181 37.5196 24.0181 37.8907 24.7454L40.9655 30.7705C41.1108 31.0552 41.3835 31.2533 41.6992 31.3035L48.3796 32.366C49.186 32.4942 49.5071 33.4825 48.9301 34.0602L44.15 38.8464C43.9241 39.0726 43.82 39.3931 43.8698 39.7089L44.9237 46.3907C45.0509 47.1972 44.2102 47.808 43.4825 47.4378L37.4534 44.3707C37.1685 44.2257 36.8315 44.2257 36.5466 44.3707L30.5175 47.4378C29.7898 47.808 28.9491 47.1972 29.0763 46.3907L30.1302 39.7089C30.18 39.3931 30.0759 39.0726 29.85 38.8464L25.0699 34.0602C24.4929 33.4825 24.814 32.4942 25.6204 32.366L32.3008 31.3035C32.6165 31.2533 32.8892 31.0552 33.0345 30.7705L36.1093 24.7454Z"
                  fill="white"
                />
              </svg>
              <div>
                <Text size="text-xl" weight="regular">
                  <strong>Compartihe com seu time</strong>
                </Text>
                <Text size="text-lg" weight="regular">
                  <span>Ipsum varius egestas pharetra viverra.</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </S.StepsContent>
    </S.Steps>
  )
}
