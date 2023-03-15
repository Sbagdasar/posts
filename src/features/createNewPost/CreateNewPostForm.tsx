import React, {useState} from 'react';
import {CustomInput} from "../../components/UI/input/CustomInput";
import Form from "antd/lib/form/Form";
import {CustomButton} from "../../components/UI/button/CustomButton";
import s from './CreateNewPostForm.module.css'

type CreateNewPostFormPropsType = {
    addNewPost: (post:{title:string, body:string}) => void
}
export const CreateNewPostForm = ({addNewPost}: CreateNewPostFormPropsType) => {

    const [post, setPost] = useState({ title:'', body:''})
    const addPostClickHandler = () => {
        addNewPost(post)
        setPost({ title:'', body:''})
    }
    const titleChangeHandler = (title: string) => {
        setPost({...post, title})
    }
    const descriptionChangeHandler = (body: string) => {
        setPost({...post, body})

    }


    return (
        <Form
            className={s.customForm}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
        >
            <CustomInput placeholder={'Post name'} value={post.title} onChange={titleChangeHandler}/>
            <CustomInput placeholder={'Post description'} value={post.body} onChange={descriptionChangeHandler}/>
            <CustomButton onClick={addPostClickHandler}>Add post</CustomButton>
        </Form>
    );
};

