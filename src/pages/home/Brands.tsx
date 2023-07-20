import * as S from './styles'
import Image from 'next/image'

export function Brands() {
  return (
    <S.Brands>
      <S.BrandsContent>
        <Image src="/img/brands/google.png" width={120} height={40} alt="" />
        <Image src="/img/brands/spotify.png" width={120} height={40} alt="" />
        <Image src="/img/brands/github.png" width={120} height={40} alt="" />
        <Image src="/img/brands/microsoft.png" width={120} height={40} alt="" />
        <Image src="/img/brands/digg.png" width={120} height={40} alt="" />
        <Image src="/img/brands/hostgator.png" width={120} height={40} alt="" />
      </S.BrandsContent>
    </S.Brands>
  )
}
