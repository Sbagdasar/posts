import React, { useEffect, useState } from 'react'

import Spin from 'antd/lib/spin'
import { useParams } from 'react-router-dom'

import { CommentType, postsAPI, PostType } from '../../dll/postsAPI'
import { useFetching } from '../../hooks/useFetching'
import { CommentsList } from '../commentsList/CommentsList'

export const PostItemPage = () => {
  const [post, setPost] = useState<PostType>()
  const [comments, setComments] = useState<CommentType[]>()
  const params = useParams()

  console.log(params)
  const [isLoading, error, isFetching] = useFetching((id: number) => {
    postsAPI.getItemPost(id).then(res => {
      setPost(res.data)
    })
  })

  const [isLoadingComments, errorComments, isFetchingComments] = useFetching(
    (id: number, comments: string) => {
      postsAPI.getComments(id, comments).then(res => {
        setComments(res.data)
      })
    }
  )

  useEffect(() => {
    if (params.id) isFetching(+params.id)

    if (params.comments && params.id) isFetchingComments(+params.id, params.comments)
  }, [params])

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading ? (
        <Spin
          tip="Loading..."
          size="large"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        />
      ) : (
        <div>
          <h2>Post with id: {post?.id}</h2>
          <div>{post?.title}</div>
          <div>{post?.body}</div>
        </div>
      )}
      {errorComments && <h2>{errorComments}</h2>}
      {isLoadingComments ? (
        <Spin
          tip="Loading..."
          size="large"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        />
      ) : (
        <CommentsList comments={comments} />
      )}
    </div>
  )
}
