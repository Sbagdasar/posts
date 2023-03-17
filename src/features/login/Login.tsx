import React, { useState } from 'react'

import { CustomButton } from '../../components/UI/button/CustomButton'
import { CustomInput } from '../../components/UI/input/CustomInput'

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form>
        <CustomInput placeholder={'login'} value={login} onChange={() => {}} />
        <CustomInput
          placeholder={'password'}
          type={'password'}
          value={password}
          onChange={() => {}}
        />
        {/* eslint-disable-next-line react/no-children-prop */}
        <CustomButton onClick={() => {}} children={'Sign in'} />
      </form>
    </div>
  )
}
