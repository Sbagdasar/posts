import React, {useState} from 'react';
import {CustomInput} from "../../components/UI/input/CustomInput";
import Form from "antd/lib/form/Form";
import {CustomButton} from "../../components/UI/button/CustomButton";
import s from './CreateNewPostForm.module.css'

type CreateNewPostFormPropsType = {
    addNewPost: (title: string, description: string) => void
}
export const CreateNewPostForm = ({addNewPost}: CreateNewPostFormPropsType) => {

    const [postTitle, setPostTitle] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const addPostClickHandler = () => {
        addNewPost(postTitle, postDescription)
        setPostTitle('')

        setPostDescription('')

    }
    const titleChangeHandler = (title: string) => {
        setPostTitle(title)
    }
    const descriptionChangeHandler = (title: string) => {
        setPostDescription(title)
    }

    return (
        <Form
            className={s.customForm}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
        >
            <CustomInput placeholder={'Post name'} value={postTitle} onChange={titleChangeHandler}/>
            <CustomInput placeholder={'Post description'} value={postDescription} onChange={descriptionChangeHandler}/>
            <CustomButton onClick={addPostClickHandler}>Add post</CustomButton>
        </Form>
    );
};

