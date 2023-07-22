import Image from 'next/image'
import * as S from './styles'
import { Text } from '../Text'

interface PostCardProps {
  tag: string
  date: string
  title: string
  slug: string
}

export function PostCard({ tag, date, title, slug }: PostCardProps) {
  return (
    <S.Container>
      <div className="image">
        <Image src="/img/post.png" width={280} height={340} alt="" />
      </div>
      <div>
        <Text size="text-base" weight="semi">
          <span>{tag}</span>
        </Text>
        <Text size="text-base" weight="semi">
          <span>{date}</span>
        </Text>
      </div>
      <Text size="text-xl" weight="regular">
        <p>{title}</p>
      </Text>
    </S.Container>
  )
}
