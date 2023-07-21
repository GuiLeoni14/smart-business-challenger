import Link from 'next/link'
import { Text } from '../../components/Text'
import * as S from './styles'
import Image from 'next/image'
import { PostCard } from '../../components/PostCard'

export function Blog() {
  return (
    <S.Blog>
      <S.BlogContent>
        <div className="top">
          <div>
            <Text size="text-base" weight="semi">
              <span>Nosso blog</span>
            </Text>
            <Text size="text-4xl" weight="regular">
              <h2>Notícias do mundo da tecnologia</h2>
            </Text>
          </div>
          <Text size="text-lg" weight="semi">
            <Link href="/blog">
              Conheça nosso blog
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.5H16M16 7.5L10 1.5M16 7.5L10 13.5"
                  stroke="#1D63FF"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </Text>
          <div>
            <Image
              src="/img/icons/icon_arrow_prev.svg"
              width={10}
              height={20}
              alt=""
            />
            <Image
              src="/img/icons/icon_arrow_next.svg"
              width={10}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className="posts">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </S.BlogContent>
    </S.Blog>
  )
}
