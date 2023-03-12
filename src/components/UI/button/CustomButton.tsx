import React from 'react';
import s from './CustomButton.module.css'
import Button from "antd/lib/button";
type CustomButtonPropsType = {
    children: React.ReactNode
}
export const CustomButton = ({children, ...props}:CustomButtonPropsType) => {
    return (
        <Button {...props} className={s.cBtn}>
            {children}
        </Button>
    );
};

