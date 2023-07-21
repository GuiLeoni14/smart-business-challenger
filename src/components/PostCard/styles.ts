import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .image {
    width: 100%;
    height: 34rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div:nth-of-type(2) {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    span:first-child {
      color: ${({ theme }) => theme.colors['blue-500']};
    }
  }
  & > p {
    margin-top: 1.2rem;
  }
`
