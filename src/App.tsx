import React, { useState } from 'react'

import './styles/App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { RequireAuthRoute } from './components/appRouters/RequireAuthRoute'
import { AuthContext } from './components/context/AuthContext'
import { HomePage } from './components/HomePage'
import { PostItemPage } from './components/postItemPage/PostItemPage'
import { About } from './features/about/About'
import { Login } from './features/login/Login'
import { Posts } from './features/posts/Posts'
import { PATH } from './utils/path'

export type SortType = 'title' | 'body'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<HomePage />} errorElement={<h1>404: PAGE NOT FOUND</h1>}>
      <Route element={<RequireAuthRoute />}>
        <Route index element={<Posts />} />
        <Route path={`/${PATH.POSTS}`} element={<Posts />} />
        <Route path={`/${PATH.POSTS}/:id/:comments?`} element={<PostItemPage />} />
        <Route path={`/${PATH.ABOUT}`} element={<About />} />
      </Route>
      <Route path={`/${PATH.LOGIN}`} element={<Login />} />
      <Route path={`/${PATH.ERROR}`} element={<h1>404: PAGE NOT FOUND</h1>} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Route>
  )
)

export function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}
