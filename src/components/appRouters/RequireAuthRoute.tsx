import React, { useContext } from 'react'

import { Navigate, Outlet, Location, useLocation } from 'react-router-dom'

import { Navbar } from '../../features/navBar/Navbar'
import { PATH } from '../../utils/path'
import { AuthContext } from '../context/AuthContext'

export interface RedirectLocation extends Location {
  state: { path?: string }
}

export const useRedirectLocation: () => RedirectLocation = useLocation
export const RequireAuthRoute = () => {
  const isLoggedIn = useContext(AuthContext)
  const location = useRedirectLocation()

  return isLoggedIn?.isAuth ? (
    <div className={'App'}>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate
      to={`/${PATH.LOGIN}`}
      state={{ path: location.pathname } as typeof location.state}
      replace
    />
  )
}
