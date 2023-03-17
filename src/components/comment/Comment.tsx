import React from 'react'

import { CommentType } from '../../dll/postsAPI'

import s from './Comment.module.css'
type CommentPropsType = {
  comment: CommentType
}
export const Comment = ({ comment }: CommentPropsType) => {
  return (
    <div className={s.commentContainer}>
      <h4>{comment.name}</h4>
      <p>body: {comment.body}</p>
      <h5>email: {comment.email}</h5>
    </div>
  )
}
