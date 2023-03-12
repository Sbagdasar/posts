import React from 'react';
import {CustomInput} from "../../components/UI/input/CustomInput";
import Form from "antd/lib/form/Form";
import {CustomButton} from "../../components/UI/button/CustomButton";
import s from './CreateNewPostForm.module.css'
export const CreateNewPostForm = () => {
    return (
        <Form
            className={s.customForm}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
        >
            <CustomInput placeholder={'Post name'}/>
            <CustomInput placeholder={'Post description'}/>
            <CustomButton>Add post</CustomButton>
        </Form>
    );
};

