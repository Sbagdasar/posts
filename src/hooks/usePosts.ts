import {useMemo} from "react";
import {PostType} from "../App";

export const usePosts = (posts: PostType[], sortBy : keyof PostType, search:string) => {
    const sortedPosts = useSortedPosts(posts, sortBy)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [sortedPosts, search])
}
export const useSortedPosts = (posts: PostType[], sortBy :keyof PostType) => {
  return useMemo(() => {
        if (sortBy) {
            return [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        }
        return posts
    }, [sortBy, posts])
}