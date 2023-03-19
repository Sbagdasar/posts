import React, { useContext } from 'react'

import Spin from 'antd/lib/spin'
import { Outlet } from 'react-router-dom'

import { AuthContext, AuthContextType } from './context/AuthContext'

export const HomePage = () => {
  let { isLoading } = useContext<AuthContextType>(AuthContext)

  return (
    <>
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
        <Outlet />
      )}
    </>
  )
}
