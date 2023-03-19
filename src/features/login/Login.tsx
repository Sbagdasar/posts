import React, { useContext, useState } from 'react'

import { Navigate } from 'react-router-dom'

import { useRedirectLocation } from '../../components/appRouters/RequireAuthRoute'
import { AuthContext, AuthContextType } from '../../components/context/AuthContext'
import { CustomButton } from '../../components/UI/button/CustomButton'
import { CustomInput } from '../../components/UI/input/CustomInput'
import { PATH } from '../../utils/path'

import s from './Login.module.css'
export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  let { isAuth, setIsAuth } = useContext<AuthContextType>(AuthContext)
  const { state: locationState } = useRedirectLocation()
  const loginHandler = (title: string) => {
    setLogin(title)
  }
  const passwordHandler = (title: string) => {
    setPassword(title)
  }

  const signInHandler = () => {
    if (login === 'admin' && password === '123') {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }
  }

  if (isAuth) {
    return <Navigate to={locationState?.path || `/${PATH.POSTS}`} replace />
  }

  return (
    <div className={s.loginContainer}>
      <form>
        <CustomInput placeholder={'login -- write admin'} value={login} onChange={loginHandler} />
        <CustomInput
          placeholder={'password -- write 123'}
          type={'password'}
          value={password}
          onChange={passwordHandler}
        />
        {/* eslint-disable-next-line react/no-children-prop */}
        <CustomButton onClick={signInHandler} children={'Sign in'} />
      </form>
    </div>
  )
}
