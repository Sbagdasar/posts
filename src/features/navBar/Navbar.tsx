import React from 'react'

import Menu from 'antd/lib/menu'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}
