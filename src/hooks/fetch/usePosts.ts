import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { GetPostsQuery, GetPostsQueryVariables } from '../../graphql/generated'
import { gqlClient } from '../../lib/gqlRequest'

export const getPostQueryDocument = gql`
  fragment post on Post {
    title
    slug
    tag
    date
    excerpt
    content {
      html
    }
  }

  query getPosts(
    $where: PostWhereInput
    $orderBy: PostOrderByInput
    $first: Int
    $skip: Int
    $last: Int
    $after: String
    $before: String
  ) {
    posts(
      orderBy: $orderBy
      first: $first
      skip: $skip
      where: $where
      last: $last
      after: $after
      before: $before
    ) {
      ...post
    }
  }
`

interface UsePostsProps {
  variables?: GetPostsQueryVariables
  identifier?: string | string[]
  options?: any
}

export const getPosts = async (variables?: GetPostsQueryVariables) => {
  const response = await gqlClient.request<GetPostsQuery>(
    getPostQueryDocument,
    variables,
  )
  return response.posts
}

export const usePosts = ({ variables, options, identifier }: UsePostsProps) => {
  return useQuery(['post-query', identifier], () => getPosts(variables), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
