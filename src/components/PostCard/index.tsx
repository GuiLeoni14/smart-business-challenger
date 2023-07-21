import Image from 'next/image'
import * as S from './styles'
import { Text } from '../Text'

export function PostCard() {
  return (
    <S.Container>
      <div className="image">
        <Image src="/img/post.png" width={280} height={340} alt="" />
      </div>
      <div>
        <Text size="text-base" weight="semi">
          <span>Business</span>
        </Text>
        <Text size="text-base" weight="semi">
          <span>Outubro 2021</span>
        </Text>
      </div>
      <Text size="text-xl" weight="regular">
        <p>Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor</p>
      </Text>
    </S.Container>
  )
}
