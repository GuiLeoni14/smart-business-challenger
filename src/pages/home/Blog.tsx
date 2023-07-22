import Link from 'next/link'
import { Text } from '../../components/Text'
import * as S from './styles'
import Image from 'next/image'
import { PostCard } from '../../components/PostCard'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { usePosts } from '../../hooks/fetch/usePosts'

export function Blog() {
  const { data: posts } = usePosts({
    identifier: ['blog-section'],
    variables: {
      first: 8,
    },
  })

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
              id="prev"
              alt=""
            />
            <Image
              src="/img/icons/icon_arrow_next.svg"
              width={10}
              height={20}
              id="next"
              alt=""
            />
          </div>
        </div>
        <div className="posts">
          <Swiper
            spaceBetween={33}
            pagination={{ clickable: true }}
            navigation={{
              enabled: true,
              nextEl: `#next`,
              prevEl: `#prev`,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 3000,
            }}
            className="mt-5"
          >
            {posts?.map((post) => {
              return (
                <SwiperSlide key={post.slug}>
                  <PostCard
                    title={post.title}
                    slug={post.slug}
                    date={post.date}
                    tag={post.tag}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
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
      </S.BlogContent>
    </S.Blog>
  )
}
