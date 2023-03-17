import React from 'react';
import {CustomButton} from "../UI/button/CustomButton";
import {postsAPI, PostType} from "../../dll/postsAPI";

import s from "./PostItem.module.css"
import {useNavigate} from "react-router-dom";

export type PostItemPropsType = {
    post: PostType
    removePost: (id: number) => void
}
export const PostItem = ({post, ...props}: PostItemPropsType) => {

    const navigate = useNavigate();

    const removePostHandler = () => {
        props.removePost(post.id)
    }
    const openPostHandler = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div className="post">
            <div className="post_content">
                <span>{post.id}. </span>
                <strong>{post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className={s.post_button}>
                <CustomButton onClick={openPostHandler}>Open</CustomButton>
                <CustomButton onClick={removePostHandler}>Delete</CustomButton>
            </div>
        </div>
    );
};

