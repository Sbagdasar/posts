import React, { useContext } from 'react'

import Menu from 'antd/lib/menu'
import { Link } from 'react-router-dom'

import { AuthContext, AuthContextType } from '../../components/context/AuthContext'
import { CustomButton } from '../../components/UI/button/CustomButton'

import s from './Navbar.module.css'

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext<AuthContextType>(AuthContext)
  const logOutHandler = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={s.navbarContainer}>
      <Menu
        onClick={() => {}}
        selectedKeys={['Posts']}
        mode="horizontal"
        items={[
          {
            // eslint-disable-next-line react/no-children-prop
            label: <Link to="/posts" children={'Posts'} />,
            key: 'Posts',
          },
          {
            // eslint-disable-next-line react/no-children-prop
            label: <Link to="/about" children={'About'} />,
            key: 'About',
          },
        ]}
      />
      {/* eslint-disable-next-line react/no-children-prop */}
      {isAuth ? <CustomButton onClick={logOutHandler} children={'Log out'} /> : null}
    </div>
  )
}
