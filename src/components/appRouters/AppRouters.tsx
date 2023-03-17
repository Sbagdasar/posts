import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { About } from '../../features/about/About'
import { Posts } from '../../features/posts/Posts'
import { PostItemPage } from '../postItemPage/PostItemPage'

export const AppRouters = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Posts />} />
      <Route path={'/posts'} element={<Posts />} />
      <Route path={'/posts/:id/:comments?'} element={<PostItemPage />} />
      <Route path={'/about'} element={<About />} />
      <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Routes>
  )
}
