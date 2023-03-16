import React from 'react';
import Menu from "antd/lib/menu";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Menu onClick={() => {
            }} selectedKeys={['Posts']} mode="horizontal" items={[{
                label: <Link to="/posts" children={'Posts'}/>,
                key: 'Posts',
            },
                {
                    label: <Link to="/about" children={'About'}/>,
                    key: 'About',
                }]}/>
        </div>
    );
};

