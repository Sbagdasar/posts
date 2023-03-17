import React from 'react'

import './styles/App.css'
import { AppRouters } from './components/appRouters/AppRouters'
import { Navbar } from './features/navBar/Navbar'

export type SortType = 'title' | 'body'

export function App() {
  return (
    <div className={'App'}>
      <Navbar />
      <AppRouters />
    </div>
  )
}
