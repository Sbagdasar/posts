import { useMemo } from 'react'

import { SortType } from '../App'
import { PostType } from '../dll/postsAPI'

export const usePosts = (posts: PostType[], sortBy: SortType, search: string) => {
  const sortedPosts = useSortedPosts(posts, sortBy)

  return useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [sortedPosts, search])
}
export const useSortedPosts = (posts: PostType[], sortBy: SortType) => {
  return useMemo(() => {
    if (sortBy) {
      return [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    }

    return posts
  }, [sortBy, posts])
}
