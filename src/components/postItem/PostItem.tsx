import React from 'react'

import { useNavigate } from 'react-router-dom'

import { postsAPI, PostType } from '../../dll/postsAPI'
import { PATH } from '../../utils/path'
import { CustomButton } from '../UI/button/CustomButton'

import s from './PostItem.module.css'

export type PostItemPropsType = {
  post: PostType
  removePost: (id: number) => void
}
export const PostItem = ({ post, ...props }: PostItemPropsType) => {
  const navigate = useNavigate()

  const removePostHandler = () => {
    props.removePost(post.id)
  }
  const openPostHandler = () => {
    navigate(`/${PATH.POSTS}/${post.id}/comments`)
  }

  return (
    <div className="post">
      <div className="post_content">
        <span>{post.id}. </span>
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className={s.post_button}>
        <CustomButton onClick={openPostHandler}>Open</CustomButton>
        <CustomButton onClick={removePostHandler}>Delete</CustomButton>
      </div>
    </div>
  )
}
