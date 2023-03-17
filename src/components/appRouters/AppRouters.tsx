import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { About } from '../../features/about/About'
import { Login } from '../../features/login/Login'
import { Posts } from '../../features/posts/Posts'
import { PATH } from '../../utils/path'
import { PostItemPage } from '../postItemPage/PostItemPage'

export const AppRouters = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Posts />} errorElement={<h1>404: PAGE NOT FOUND</h1>} />
      <Route path={`/${PATH.POSTS}`} element={<Posts />} />
      <Route path={`/${PATH.POSTS}/:id/:comments?`} element={<PostItemPage />} />
      <Route path={`/${PATH.ABOUT}`} element={<About />} />
      <Route path={`/${PATH.LOGIN}`} element={<Login />} />
      <Route path={`/${PATH.ERROR}`} element={<h1>404: PAGE NOT FOUND</h1>} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Routes>
  )
}
