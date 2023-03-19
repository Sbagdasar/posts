import React from 'react'

import { Outlet } from 'react-router-dom'

import { Navbar } from '../features/navBar/Navbar'

export const HomePage = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
