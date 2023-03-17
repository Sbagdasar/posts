import React, { memo } from 'react'

import { CommentType } from '../../dll/postsAPI'
import { Comment } from '../comment/Comment'

import s from './CommentsList.module.css'
type CommentsListPropsType = {
  comments?: CommentType[]
}
export const CommentsList = memo(({ comments }: CommentsListPropsType) => {
  return (
    <div className={s.listContainer}>
      <h3>Comments</h3>
      <div className={s.list}>
        {comments?.map(comment => {
          return <Comment key={comment.id} comment={comment} />
        })}
      </div>
    </div>
  )
})
