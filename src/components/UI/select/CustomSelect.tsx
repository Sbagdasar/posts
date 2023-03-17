import React from 'react'

import Select from 'antd/lib/select'

type CustomSelectPropsType = {
  defaultValue: string
  options: OptionsType[]
  value: string
  onChange: (sort: 'title' | 'body') => void
}
type OptionsType = {
  value: string
  label: string
  disabled?: boolean
}
export const CustomSelect = (props: CustomSelectPropsType) => {
  const handleChange = (value: string) => {
    if (value === 'title' || value === 'body') {
      props.onChange(value)
    }
  }

  return (
    <>
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        options={props.options}
        value={props.value}
        defaultValue={props.defaultValue}
      />
    </>
  )
}
