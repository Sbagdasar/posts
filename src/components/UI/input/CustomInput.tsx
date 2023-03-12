import React from 'react';
import Input from "antd/lib/input/Input";
import s from './CustomInput.module.css'
type CustomInputPropsType = {
    placeholder:string
}
export const CustomInput = ({placeholder, ...props}:CustomInputPropsType) => {
    return (
        <Input {...props} placeholder={placeholder} className={s.cInput}/>
    );
};

