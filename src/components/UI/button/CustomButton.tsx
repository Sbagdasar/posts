import React, {MouseEvent} from 'react';
import s from './CustomButton.module.css'
import Button from "antd/lib/button";

type CustomButtonPropsType = {
    children: React.ReactNode
    onClick : ()=>void
}
export const CustomButton = ({children, ...props}:CustomButtonPropsType) => {
    const onClickBtn = (e:MouseEvent) => {
        e.preventDefault()
        props.onClick()
    }
    return (
        <Button {...props} onClick={onClickBtn} className={s.cBtn} type={'primary'}>
            {children}
        </Button>
    );
};

