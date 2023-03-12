import React, {useState} from 'react';
import {CustomInput} from "../../components/UI/input/CustomInput";
import Form from "antd/lib/form/Form";
import {CustomButton} from "../../components/UI/button/CustomButton";
import s from './CreateNewPostForm.module.css'

type CreateNewPostFormPropsType = {
    addNewPost: (post:{title:string, description:string}) => void
}
export const CreateNewPostForm = ({addNewPost}: CreateNewPostFormPropsType) => {

    const [post, setPost] = useState({ title:'', description:''})
    const addPostClickHandler = () => {
        addNewPost(post)
        setPost({ title:'', description:''})
    }
    const titleChangeHandler = (title: string) => {
        setPost({...post, title})
    }
    const descriptionChangeHandler = (description: string) => {
        setPost({...post, description})

    }


    return (
        <Form
            className={s.customForm}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
        >
            <CustomInput placeholder={'Post name'} value={post.title} onChange={titleChangeHandler}/>
            <CustomInput placeholder={'Post description'} value={post.description} onChange={descriptionChangeHandler}/>
            <CustomButton onClick={addPostClickHandler}>Add post</CustomButton>
        </Form>
    );
};

