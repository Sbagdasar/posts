import React, { ChangeEvent } from 'react'

import Input from 'antd/lib/input/Input'

import s from './CustomInput.module.css'
type CustomInputPropsType = {
  placeholder: string
  value: string
  onChange: (title: string) => void
  type?: string
}
export const CustomInput = ({ placeholder, ...props }: CustomInputPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value)
  }

  return (
    <Input
      {...props}
      placeholder={placeholder}
      className={s.cInput}
      value={props.value}
      onChange={onChangeHandler}
    />
  )
}
