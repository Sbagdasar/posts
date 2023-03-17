import React from 'react'

import { SortType } from '../../App'
import { CustomInput } from '../../components/UI/input/CustomInput'
import { CustomSelect } from '../../components/UI/select/CustomSelect'

import s from './ToolBar.module.css'
type ToolBarPT = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}
type FilterType = {
  sortBy: string
  search: string
}
export const ToolBar = ({ filter, setFilter }: ToolBarPT) => {
  const sortPosts = (sortBy: 'title' | 'body') => {
    setFilter({ ...filter, sortBy })
  }
  const setSearchValue = (value: string) => {
    setFilter({ ...filter, search: value })
  }

  return (
    <div className={s.toolbarContainer}>
      <CustomInput placeholder={'Search'} value={filter.search} onChange={setSearchValue} />
      <CustomSelect
        defaultValue={'Sort by'}
        options={[
          { value: 'Sort by', label: 'Sort by', disabled: true },
          { value: 'title', label: 'title' },
          { value: 'body', label: 'body' },
        ]}
        value={filter.sortBy || 'Sort by'}
        onChange={sortPosts}
      />
    </div>
  )
}
